'use strict';

const nameError = document.querySelector('.name-error');
const nameField = document.querySelector('#name');

const emailError = document.querySelector('.email-error');
const emailField = document.querySelector('#email');

const phoneError = document.querySelector('.phone-error');
const phoneField = document.querySelector('#phone');

const messageError = document.querySelector('.message-error');
const messageField = document.querySelector('#message');

const formEl = document.querySelector('form');
const submitError = document.querySelector('.submit-error');

function validateName() {
  const name = nameField.value;
  if (name.length == 0) {
    nameError.innerHTML = 'Name is Required';
    return false;
  }
  if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)) {
    nameError.innerHTML = 'Kindly Enter Full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateEmail() {
  const email = emailField.value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email is Required';
    return false;
  }
  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = 'Kindly Enter A Valid Email';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validatePhone() {
  const phone = phoneField.value;
  if (phone.length === 0) {
    phoneError.innerHTML = 'Phone is Required';
    return false;
  }
  if (!phone.match(/^\d{10}$/)) {
    phoneError.innerHTML = 'Must be 10 Digits';
    return false;
  }
  if (!phone.match(/^\d+$/)) {
    phoneError.innerHTML = 'Only Digits Allowed';
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateMessage() {
  const message = messageField.value;
  const required = 30;
  const left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = `${left} remaining`;
    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}
function validateForm(e) {
  e.preventDefault();
  if (
    !validateName() ||
    !validateEmail() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fill all required fields';
    setTimeout(() => {
      submitError.style.display = 'none';
    }, 3000);
    return;
  }

  phoneField.value = '';
  phoneError.innerHTML = '';
  nameField.value = '';
  nameError.innerHTML = '';
  messageField.value = '';
  messageError.innerHTML = '';
  emailField.value = '';
  emailError.innerHTML = '';
}

nameField.addEventListener('keyup', validateName);
emailField.addEventListener('keyup', validateEmail);
phoneField.addEventListener('keyup', validatePhone);
messageField.addEventListener('keyup', validateMessage);
formEl.addEventListener('submit', validateForm);
