const pomodoroButton = document.getElementsByName('pomodoro')[0];
const shortBreakButton = document.getElementsByName('short-break')[0];
const longBreakButton = document.getElementsByName('long-break')[0];

const startTimerButton = document.getElementsByName('start-timer')[0];
const pauseTimerButton = document.getElementsByName('pause-timer')[0];
const resetTimerButton = document.getElementsByName('reset-timer')[0];

/**************** POMODORO BUTTONS **********************/
pomodoroButton.addEventListener('click', () => {
    const setPomodoro = timerController.setPomodoro.bind(timerController);
    setPomodoro();
});

shortBreakButton.addEventListener('click', () => {
    const setShortBreak = timerController.setShortBreak.bind(timerController);
    setShortBreak();
});

longBreakButton.addEventListener('click', () => {
    const setLongBreak =  timerController.setLongBreak.bind(timerController);
    setLongBreak();
});

/******************* CONTROL BUTTONS ********************/
startTimerButton.addEventListener('click', () => {
    const start = timerController.start.bind(timerController);
    start();
});

pauseTimerButton.addEventListener('click', () => {
    const pause = timerController.pause.bind(timerController);
    pause();
});

resetTimerButton.addEventListener('click', () => {
    const reset = timerController.reset.bind(timerController);
    reset();
});
