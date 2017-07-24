class ErrorHandler {
    constructor() {
        this._fatherEle = document.getElementById('error-field');
    }

    showError(type){
        if(type === 'timer-on'){
            const errorText = document.createTextNode('O timer ja está rodando!');

            this._fatherEle.innerHTML = "";
            this._fatherEle.appendChild(errorText);
            this._fatherEle.style.color = "black";

            setTimeout(this.clearErrors.bind(this), 5000);
        }
    }

    clearErrors(){
        this._fatherEle.style.color = "white";
    }
}
