const counterDisplay = document.getElementById("counterDisplay");
const countAdd = document.getElementById("counterAdd");
const countSub = document.getElementById("counterSub");

let total = 0;
const limit = 20;

const updateCounter = () => {
  if (total < 0) {
    total = 0;
  } else if (total > limit) {
    total = limit;
  }

  counterDisplay.textContent = total;

  document.body.style.setProperty(
    "background-color",
    `rgb(${(total / limit) * 255}, 64, 0)`
  );
};

countAdd.addEventListener("click", () => {
  total += 1;

  updateCounter();
});

countSub.addEventListener("click", () => {
  total -= 1;

  updateCounter();
});

updateCounter();
