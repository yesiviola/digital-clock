const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timer;
let seconds = 0;

function updateTime() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
    timeDisplay.textContent = formattedTime;
}

startButton.addEventListener("click", function () {
    if (!timer) {
        timer = setInterval(function () {
            seconds++;
            updateTime();
        }, 1000);
    }
});

stopButton.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});

resetButton.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateTime();
});

updateTime();
