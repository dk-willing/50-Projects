const input = document.querySelector(".input");
const formBtn = document.querySelector(".btn");
const form = document.querySelector(".form");

function reverseString(str) {
  return str.split("").reverse();
}

function check(e) {
  e.preventDefault();

  const value = input.value;

  if (value === "" || value.trim() === "") {
    showAlert("alert show error", "Please add a text!");
    return;
  }

  const reversed = reverseString(value);

  const reversedString = reversed.join("");

  if (reversedString.toLowerCase() === value.toLowerCase()) {
    showAlert("alert show success", "This is a palindrome!");
  } else {
    showAlert("alert show error", "This is not a palindrome!");
  }

  input.value = "";
}

function showAlert(classes, text) {
  const div = document.createElement("div");
  div.className = classes;

  const p = document.createElement("p");
  p.appendChild(document.createTextNode(text));
  div.appendChild(p);

  document.querySelector(".alertEl").appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 2000);
}

form.addEventListener("submit", check);
