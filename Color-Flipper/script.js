const currentColor = document.querySelector("#current-color");
const newColorBtn = document.querySelector("#new-color-btn");

// Array to store hex values
const arr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Function to generate hex values
function getHexValues() {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const randomHexValue = arr[randomIndex];

  return randomHexValue;
}

// Function to get generated hex string
function getHexString(stringLength) {
  let hexString = "";

  for (let i = 0; i < stringLength; i++) {
    hexString += getHexValues();
  }

  return hexString;
}

newColorBtn.addEventListener("click", () => {
  const bgColor = `#${getHexString(6)}`;

  document.body.style.setProperty("background-color", bgColor);

  currentColor.textContent = bgColor;
});
