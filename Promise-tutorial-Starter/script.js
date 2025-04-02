const carsPosition = (carNum, maxTime = 5) => {
  return new Promise((resolve, reject) => {
    const randomTime = Math.floor(Math.random() * maxTime) * 1000;

    setTimeout(() => {
      resolve(carNum);
    }, randomTime);
  });
};

const carPlacement = [];

const updateDisplay = () => {
  const racingElement = document.getElementById("racing");
  racingElement.innerHTML = "";

  carPlacement.forEach((id, index) => {
    racingElement.innerHTML += `
    <div>
        <img src="car-${id}.png" alt="" />
        <p>#${index + 1} Position</p>
      </div>
    `;
  });
};

carsPosition(1)
  .then((result) => {
    carPlacement.push(result);
  })
  .then(updateDisplay);
carsPosition(2)
  .then((result) => {
    carPlacement.push(result);
  })
  .then(updateDisplay);
