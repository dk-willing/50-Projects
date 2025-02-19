const cards = document.querySelectorAll(".card");

const removeActiveClass = () => {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};

cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeActiveClass();
    card.classList.add("active");
  });
});
