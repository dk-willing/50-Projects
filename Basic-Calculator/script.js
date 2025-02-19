const displayInput = document.querySelector('input[type = "text"]');

class Calculator {
  constructor() {
    const inputBtn = document.querySelectorAll('input[type = "button"]');

    inputBtn.forEach((btn) => {
      btn.addEventListener("click", this._calc.bind(this));
    });
  }

  _calc(e) {
    if (e.target.getAttribute("value") === "AC") {
      displayInput.value = "";
      return;
    }

    if (e.target.getAttribute("value") === "DE") {
      displayInput.value = displayInput.value.toString().slice(0, -1);
      return;
    }

    if (e.target.getAttribute("value") !== "=") {
      displayInput.value += e.target.getAttribute("value");
      return;
    }

    if (e.target.getAttribute("value") === "=") {
      if (displayInput.value === "") {
        displayInput.value = "0";
      } else {
        displayInput.value = eval(displayInput.value);
      }
    }
  }
}

const calculator = new Calculator();
