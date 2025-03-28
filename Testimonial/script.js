const testimonials = [
  {
    author: {
      name: "Jane Doe",
      image: "img/author-1.jpg",
    },
    text: "JavaScript continues to shape the modern web, enabling developers to build powerful, interactive, and scalable applications. Whether you're creating a simple website, a complex web app, or a full-stack solution, JavaScript remains an essential tool for any software engineer.",
    date: "28th May",
  },
  {
    author: {
      name: "Billey Bailey",
      image: "img/author-2.jpg",
    },
    text: "JavaScript works across different browsers and operating systems, making it a universal language for web development. Popular browsers like Chrome, Firefox, Safari, and Edge all support JavaScript natively.",
    date: "30th May",
  },
  {
    author: {
      name: "Francisca Garcia",
      image: "img/author-3.jpg",
    },
    text: "JavaScript supports event-driven programming, where code execution is triggered by user actions such as clicks, keystrokes, or scrolling. It also has asynchronous capabilities using mechanisms like callbacks, promises, and async/await, allowing it to handle tasks like fetching data from a server without freezing the user interface.",
    date: "1st June",
  },
  {
    author: {
      name: "Witney Chelsea",
      image: "img/author-4.jpg",
    },
    text: "JavaScript is an interpreted language, meaning it does not require compilation before execution. Browsers process JavaScript code directly, making it easy to develop and test applications quickly.",
    date: "3rd June",
  },
];

const containerElement = document.querySelector("#testimonial-container");
let currTestimonial = 0;

const nextTestimonial = () => {
  if (currTestimonial < testimonials.length - 1) {
    currTestimonial += 1;
    updateUI();
  }
};

const prevTestimonial = () => {
  if (currTestimonial > 0) {
    currTestimonial -= 1;
    updateUI();
  }
};

const makeTestimonialHTML = (testimonial) => {
  return `
    <div class="testimonial-card">
        <img src="${testimonial.author.image}">
        <h3>${testimonial.author.name}</h3>
        <p>${testimonial.text}</p>
        <date>&mdash; Written on ${testimonial.date}</date>
    </div>
    
    `;
};

const updateUI = () => {
  let markup = makeTestimonialHTML(testimonials[currTestimonial]);

  if (testimonials.length > 1) {
    markup += `
    <nav>
        <button onclick="prevTestimonial()" id="prevBtn"><i class="ri-arrow-left-s-line"></i></button>
        <button onclick="nextTestimonial()" id="nextBtn"><i class="ri-arrow-right-s-line"></i></button>
    </nav>
    `;
  }

  containerElement.innerHTML = markup;
};

updateUI();
