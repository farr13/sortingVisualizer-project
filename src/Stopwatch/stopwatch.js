//Credit to Bro Code
//https://www.youtube.com/watch?v=d8-LGhKtzRw&t=497s
let time = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


export const startTimer = () => {
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        time = setInterval(update, 10);
        isRunning = true;
    }
}

export const stopTimer = () => {
    if (isRunning){
        clearInterval(time);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

export const resetTimer = () => {
    clearInterval(time);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    const stopwatch = document.getElementById("timer");
    stopwatch.textContent = "0:00:00";
}

function update() {
    const stopwatch = document.getElementById("timer");
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    stopwatch.textContent = `${minutes}:${seconds}:${milliseconds}`;
}