const hoursInput = document.querySelector("#hour");
const minuteInput = document.querySelector("#minute");
const secondsInput = document.querySelector("#seconds");

const hoursOutput = document.querySelector("#hourOutput");
const minuteOutput = document.querySelector("#minuteOutput");
const secondsOutput = document.querySelector("#secondsOutput");

const startTimerBtn = document.querySelector("#startTimer");

let targetTime;
let timeInterval;

const updateTimer = () => {
  if (targetTime) {
    const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000;

    if (differenceInSeconds < 1) {
      clearInterval(timeInterval);
    }

    const hour = Math.floor(differenceInSeconds / 3600);
    const minute = Math.floor(differenceInSeconds / 60) % 60;
    const seconds = Math.floor(differenceInSeconds % 60);

    hoursOutput.innerHTML = `${
      hour < 10 ? "0" + hour : hour
    } <span>hours<span>`;
    minuteOutput.innerHTML = `${
      minute < 10 ? "0" + minute : minute
    } <span>minutes</span>`;
    secondsOutput.innerHTML = `${
      seconds < 10 ? "0" + seconds : seconds
    } <span>seconds</span>`;
  }
};

startTimerBtn.addEventListener("click", () => {
  if (
    hoursInput.value === "0" &&
    minuteInput.value === "0" &&
    secondsInput.value === "0"
  ) {
    alert("Kindly add a valid time");
    return;
  }

  const futureHours = parseInt(hoursInput.value);
  const futureminutes = parseInt(minuteInput.value);
  const futureSeconds = parseInt(secondsInput.value);

  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();

  date.setHours(currentHour + futureHours);
  date.setMinutes(currentMinute + futureminutes);
  date.setSeconds(currentSecond + futureSeconds);

  targetTime = date.getTime();
  localStorage.setItem("targetTime", targetTime);

  updateTimer();

  timeInterval = setInterval(updateTimer, 500);
});

const storedTargetTime = localStorage.getItem("targetTime");

if (storedTargetTime) {
  targetTime = storedTargetTime;
  updateTimer();
  timeInterval = setInterval(updateTimer, 500);
}

updateTimer();
