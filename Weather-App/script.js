const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const form = document.querySelector(".search-form");
const formInput = document.querySelector(".form-input");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const errorMsg = document.querySelector(".error-msg p");

const API_KEY = "5941702f66c7c451fbbdce7a8d034ca3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

function makeSearch(e) {
  e.preventDefault();

  if (formInput.value === "") {
    errorMsg.style.display = "inline-block";
    weather.style.display = "none";
    errorMsg.innerHTML = "Please Enter a city";

    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 3000);

    return;
  }

  updateUI();

  formInput.value = "";
}

async function getWeatherDetails(city) {
  const res = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}`);

  if (res.status === 404) {
    errorMsg.innerHTML = "Enter a valid city!";

    errorMsg.style.display = "inline-block";
    weather.style.display = "none";

    setTimeout(() => {
      errorMsg.style.display = "none";
    }, 3000);

    return;
  }

  const data = await res.json();

  return data;
}

async function updateUI() {
  const queryTerm = formInput.value;

  const result = await getWeatherDetails(queryTerm);

  if (result.weather[0].main === "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (result.weather[0].main === "Rain") {
    weatherIcon.src = "img/rain.png";
  } else if (result.weather[0].main === "Clear") {
    weatherIcon.src = "img/clear.png";
  } else if (result.weather[0].main === "Drizzle") {
    weatherIcon.src = "img/drizzle.png";
  } else if (result.weather[0].main === "Mist") {
    weatherIcon.src = "img/mist.png";
  } else if (result.weather[0].main === "Snow") {
    weatherIcon.src = "img/snow.png";
  } else if (result.weather[0].main === "Humid") {
    weatherIcon.src = "img/humid.png";
  }

  temp.innerHTML = `${Math.round(result.main.temp)}°C`;
  humidity.innerHTML = `${result.main.humidity}%`;
  wind.innerHTML = `${result.wind.speed} km/h`;
  city.innerHTML = `${result.name}`;

  weather.style.display = "block";
  weather.style.maxHeight = "50rem";

  console.log(result);
}

form.addEventListener("submit", makeSearch);
