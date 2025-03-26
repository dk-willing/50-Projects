const modalBtn = document.querySelector("#openModal");
const modalEl = document.querySelector(".modal");
const closeModal = document.querySelector(".close-btn");
const modalOverlay = modalEl.querySelector(".modal__overlay");
const submitBtn = modalEl.querySelector(".submit-btn");
const form = document.querySelector("form");
const successMsg = document.querySelector(".success");

function showModal() {
  modalEl.classList.add("open");
}

function close() {
  modalEl.classList.remove("open");
}

function toggleClasses(e) {
  e.preventDefault();

  successMsg.classList.remove("hidden");
  form.classList.add("hidden");
}

modalBtn.addEventListener("click", showModal);
closeModal.addEventListener("click", close);
modalOverlay.addEventListener("click", close);
form.addEventListener("submit", toggleClasses);
