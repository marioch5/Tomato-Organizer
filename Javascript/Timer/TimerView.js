class TimerView {
    constructor(currentTime, currentMinutes){
        this._fatherEle = document.getElementById('timer-display');
    }

    render(currentTime, currentMinutes){
        if(currentMinutes > 9){
            if(currentTime > 9){
                this._fatherEle.innerHTML =
                `
                    <p class="timer-number">${currentTime}:${currentMinutes}</p>
                `
            } else {
                this._fatherEle.innerHTML =
                `
                    <p class="timer-number">0${currentTime}:${currentMinutes}</p>
                `
            }

        } else {
            if(currentTime > 9){
                this._fatherEle.innerHTML =
                `
                    <p class="timer-number">${currentTime}:0${currentMinutes}</p>
                `
            } else {
                this._fatherEle.innerHTML =
                `
                    <p class="timer-number">0${currentTime}:0${currentMinutes}</p>
                `
            }

        }
    }
}
