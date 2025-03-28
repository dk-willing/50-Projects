const time = document.getElementById("time");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let interval = null;
let secondsElapsed = 0;

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  const hour = Math.floor(minutes / 60);

  if (hour > 24) {
    hour = 0;
    return;
  }

  time.innerHTML = `${hour < 10 ? "0" + hour : hour}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
}

function timer() {
  secondsElapsed++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}

startBtn.addEventListener("click", startClock);
stopBtn.addEventListener("click", stopClock);
resetBtn.addEventListener("click", resetClock);
