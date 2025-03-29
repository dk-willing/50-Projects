const initialQuestions = [
  {
    label: "Frendliness",
    rating: 0,
  },
  {
    label: "Cleanliness",
    rating: 0,
  },
  {
    label: "Food",
    rating: 0,
  },
  {
    label: "Service",
    rating: 0,
  },
];

const storedQuestion = JSON.parse(localStorage.getItem("storedQuestions"));

const questions = storedQuestion || initialQuestions;

const makeStarRating = (question) => {
  const container = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = question.label;
  container.appendChild(label);
  container.appendChild(makeStars(5, question));

  return container;
};

const makeStars = (maxValue, question) => {
  const starContainer = document.createElement("span");

  for (let starPosition = 1; starPosition <= maxValue; starPosition++) {
    const starElement = document.createElement("i");
    starContainer.appendChild(starElement);

    starPosition <= question.rating
      ? starElement.classList.add("ri-star-fill")
      : starElement.classList.add("ri-star-line");

    starElement.onclick = () => {
      for (let i = 0; i < maxValue; i++) {
        if (i < starPosition) {
          starContainer.children[i].classList.remove("ri-star-line");
          starContainer.children[i].classList.add("ri-star-fill");
        } else {
          starContainer.children[i].classList.remove("ri-star-fill");
          starContainer.children[i].classList.add("ri-star-line");
        }
      }

      question.rating = starPosition;
      localStorage.setItem("storedQuestions", JSON.stringify(questions));
    };
  }

  return starContainer;
};

const ratingElement = document.querySelector("#rating");

questions.forEach((question) => {
  ratingElement.appendChild(makeStarRating(question));
});
