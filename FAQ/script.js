const dataArray = [
  {
    title: "What is JavaScript?",
    details:
      "JavaScript is a versatile, high-level programming language that has become an essential part of modern web development. Originally created in 1995 by Brendan Eich at Netscape, JavaScript was designed to make web pages interactive. Over the years, it has evolved into a powerful and widely used language, enabling developers to build everything from simple web animations to complex single-page applications (SPAs) and full-stack web solutions.",
  },
  {
    title: "What are some of the key features of JavaScript?",
    details:
      " Interpreted and Lightweight JavaScript is an interpreted language, meaning it does not require compilation before execution. Browsers process JavaScript code directly, making it easy to develop and test applications quickly.",
  },
  {
    title: "What is DOM in JavaScript?",
    details:
      "One of JavaScript’s primary roles in web development is manipulating the Document Object Model (DOM). The DOM represents the structure of a web page, and JavaScript allows developers to dynamically update content, change styles, and create animations without reloading the page.",
  },
];

const makeHTML = (data) => {
  return `<details>
        <summary>${data.title}</summary>
        <p>
          ${data.details}
        </p>
      </details>`;
};

const faqContainer = document.getElementById("faq-container");

faqContainer.innerHTML = dataArray
  .map((dataItem) => makeHTML(dataItem))
  .join("");
