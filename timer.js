const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const pause = document.querySelector('.pause');
const timer = document.getElementById('timer');

// console.log(start.textContent);
// console.log(reset.textContent);
// console.log(pause.textContent);
// console.log(timer.textContent);

let seconds = 0;
let minutes = 0;
let hours = 0;
let int = null;
start.addEventListener('click', function () {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 1000);
});
pause.addEventListener('click', function () {
    clearInterval(int);
});
reset.addEventListener('click', function () {
    clearInterval(int);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerHTML = '00 : 00 : 00';
});

function displayTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let hrs = hours < 10 ? "0" + hours : hours;
    console.log(hrs);
    let mins = minutes < 10 ? "0" + minutes : minutes;
    console.log(mins);
    let secs = seconds < 10 ? "0" + seconds : seconds;
    console.log(secs);
    timer.innerHTML = `${hrs} : ${mins} : ${secs}`;
};