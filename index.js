let second = 0;
let minute = 0;
let hour = 0;
let timer; // Declare globally

// const gettime = (num) => num.toString().padStart(2, '0');

function start() {
    if (timer) return; // Prevent multiple timers
    timer = setInterval(() => {
        second++;
        if (second == 60) {
            second = 0;
            minute++;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        document.getElementById("timer").innerHTML = `${(hour)}:${(minute)}:${(second)}`;
    }, 1000);
}

function stop() {
    clearInterval(timer);
    timer = null; // Reset timer variable
}

function resetBtnClick() {
    stop();
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("timer").innerHTML = `${(hour)}:${(minute)}:${(second)}`;
}