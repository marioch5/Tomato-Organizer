class TimerController {
    constructor(timerView) {
        this.taksName = document.getElementsByName('task')[0];

        this.currentTime = 25;
        this.pomodoroTime = 25;
        this.shortBreakTime= 5;
        this.longBreakTime= 30;
        this.currentMinutes = 0;

        this.timerView = new TimerView();
        this.timerView.render(this.currentTime, this.currentMinutes);

        this.errorHandler = new ErrorHandler();

        this.isOn = false;
        this.isPomodoro = true;
        this.isShortBreak = false;
        this.isLongBreak = false;

        this.pomodoriCount = 0;
    }

    logic(self){
        if(self.currentTime <= 0 && self.currentMinutes === 0){
            self.finish();
            return;
        }

        self.currentMinutes--;

        if(self.currentMinutes < 0){
            self.currentMinutes = 59;
            self.currentTime--;
        }

        self.timerView.render(self.currentTime, self.currentMinutes);
    }

    start(){
        this.errorHandler.clearErrors();

        try {
            if(this.isOn === true) throw 'timer-on';

            this.isOn = true;

            this.timerInterval = setInterval(() => {
                const self = this;
                this.logic(self);
            }, 1000);

        } catch (error) {
            this.errorHandler.showError(error);
        }

    }

    pause(){
        if(this.isOn){
            clearInterval(this.timerInterval);
            this.isOn = false;
        }
    }

    finish(){
        notifyTimerEnd();
        this.chooseNextTimer();
    }

    reset(){
        this.pause();

        if(this.isPomodoro){
            this.currentTime = this.pomodoroTime;
            this.currentMinutes = 0;

        } else if(this.isShortBreak){
            this.currentTime = this.shortBreakTime;
            this.currentMinutes = 0;

        } else {
            this.currentTime = this.longBreakTime;
            this.currentMinutes = 0;
        }

        this.timerView.render(this.currentTime, this.currentMinutes);
    }

    chooseNextTimer(){
        if(this.isPomodoro === true){
            this.isPomodoro = false;
            if(this.pomodoriCount === 3){
                this.isLongBreak = true;
                this.pomodoriCount = 0;
                this.reset();
                return
            }
            this.pomodoriCount++;
            this.isShortBreak = true;
            this.reset();

        } else {
            if(this.isLongBreak === true){
                this.isLongBreak = false;
            } else {
                this.isShortBreak = false;
            }
            this.isPomodoro = true;
            this.reset();
        }

        console.log(this.pomodoriCount);
    }

    setPomodoro(self){
        this.pause();

        if(this.isOn === false){
            this.isPomodoro = true;
            this.currentTime = this.pomodoroTime;
            this.currentMinutes = 0;
            this.timerView.render(this.currentTime, this.currentMinutes);

            this.isShortBreak = false;
            this.isPomodoro = true;
            this.isLongBreak = false;
        }
    }

    setShortBreak(self){
        this.pause();

        if(this.isOn === false){
            this.currentTime = this.shortBreakTime;
            this.currentMinutes = 0;
            this.timerView.render(this.currentTime, this.currentMinutes);

            this.isShortBreak = true;
            this.isPomodoro = false;
            this.isLongBreak = false;
        }
    }

    setLongBreak(self){
        this.pause();

        if(this.isOn === false){
            this.currentTime = this.longBreakTime;
            this.currentMinutes = 0;
            this.timerView.render(this.currentTime, this.currentMinutes);

            this.isShortBreak = false;
            this.isPomodoro = false;
            this.isLongBreak = true;
        }
    }
}
