const quote = document.getElementById("quote");
const btn = document.getElementById("btn");

async function fetchQuote() {
  const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      Accept: "application/json",
      "X-Api-Key": "7gBndqUmLHppUGqOZ1gN4g==oUgbP0fEmqUiaGOW",
    },
  });

  const data = await res.json();

  return data;
}

async function showQuote() {
  quote.innerHTML = "";

  const results = await fetchQuote();
  console.log(results);

  const div = document.createElement("div");

  div.innerHTML = `

    <blockquote>
        <quote>
        ${results[0].quote}
        </quote>
        <span class='author'> &mdash; " ${results[0].author} " </span>
    </blockquote>
    
    `;

  quote.appendChild(div);
}
btn.addEventListener("click", showQuote);
