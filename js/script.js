// Variáveis

let seconds = 00;
let tens = 00;
let minutes = 00;
let getSeconds = document.querySelector(".seconds");
let getTens = document.querySelector(".tens");
let getMinutes = document.querySelector(".minutes");
let btnStart = document.querySelector(".btn_start");
let btnStop = document.querySelector(".btn_stop");
let btnReset = document.querySelector(".btn_reset");
let interval;

// Função para quando o cronômetro for acionado

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = "0" + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = "0" + seconds;
        tens = 0;
        getTens.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        getMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        getSeconds.innerHTML = "0" + 0;
    }
    if (minutes > 9) {
        getSeconds.innerHTML = minutes
    }
}

// Adicionando evento de click para -Iniciar-

btnStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

// Adicionando evento de click para -Pausar-

btnStop.addEventListener("click", () => {
    clearInterval(interval);
})

// dicionando evento de click para -Resetar-

btnReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMinutes.innerHTML = minutes;
})