let now = new Date();

let currentDate = document.querySelector("#todays-date");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
currentDate.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`;

function displayWeatherCondition(response) {
  document.querySelector("#place").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".weather-condition").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#high").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#low").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.humidity
  );
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(city) {
  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function searchButton(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  search(city);
}
function searchLocation(position) {
  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchBar = document.querySelector("form");
searchBar.addEventListener("submit", searchButton);

search("Lagos");

let button = document.querySelector("#btn");
button.addEventListener("click", getLocation);
