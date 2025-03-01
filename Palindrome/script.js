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
    alert("Please add a text");
    return;
  }

  const reversed = reverseString(value);

  const reversedString = reversed.join("");

  if (reversedString.toLowerCase() === value.toLowerCase()) {
    alert("This is a palindrome");
  } else {
    alert("This is not a palindrome");
  }

  input.value = "";
}

form.addEventListener("submit", check);
