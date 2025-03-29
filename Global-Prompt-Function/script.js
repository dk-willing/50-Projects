const spanEl = document.querySelector("span");
const buttonEl = document.querySelector("button");

// Function
function showPrompt() {
  const userName = prompt("Please Enter Your Name: ");

  spanEl.textContent = `${userName}!`;
}

buttonEl.addEventListener("click", showPrompt);
