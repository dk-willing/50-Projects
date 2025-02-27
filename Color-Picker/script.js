const body = document.getElementsByTagName("body")[0];
const greenBtn = document.querySelector("#green");
const redBtn = document.querySelector("#red");
const blueBtn = document.querySelector("#blue");
const randomBtn = document.querySelector("#random");

const setBgColor = (bg, color) => {
  body.style.backgroundColor = bg;
  body.style.color = color;
};

function checkLuminance(red, green, blue) {
  const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue; // Using the luminance formular

  return luminance < 128;
}

const setRandomBg = () => {
  const redColor = Math.round(Math.random() * 255);
  const blueColor = Math.round(Math.random() * 255);
  const greenColor = Math.round(Math.random() * 255);

  if (checkLuminance(redColor, blueColor, greenColor)) {
    color = `rgb(${redColor}, ${blueColor}, ${greenColor})`;
    body.style.background = color;
    body.style.color = "#fff";
  } else {
    color = `rgb(${redColor}, ${blueColor}, ${greenColor})`;
    body.style.background = color;
    body.style.color = "#333";
  }
};

greenBtn.addEventListener("click", () => setBgColor("green", "white"));
redBtn.addEventListener("click", () => setBgColor("red", "white"));
blueBtn.addEventListener("click", () => setBgColor("blue", "white"));

randomBtn.addEventListener("click", () => setRandomBg());
