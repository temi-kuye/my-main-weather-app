function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurdsay",
      "Friday",
      "Saturday"
    ];
    let day = weekDays[date.getDay()];
    return `${day} ${hours}:${minutes}`;
  }
  
  function displayTemp(response) {
    let temperature = document.querySelector("#temp");
    let city = document.querySelector("#city");
    let condition = document.querySelector("#condition");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#windSpeed");
    let todaysDate = document.querySelector("#date");
    let weatherIcon = document.querySelector("#icon");
    celsiusTemp = response.data.main.temp;
    temperature.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    condition.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = Math.round(response.data.main.humidity);
    wind.innerHTML = Math.round(response.data.wind.speed);
    todaysDate.innerHTML = formatDate(response.data.dt * 1000);
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    weatherIcon.setAttribute("alt", response.data.weather[0].description);
  }
  
  function search(city) {
    let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemp);
  }
  
  function searchSubmit(event) {
    event.preventDefault();
    let cityInput = document.querySelector("#city-input");
    search(cityInput.value);
  }
  
  function convertFahTemp(event) {
    event.preventDefault();
    fahrenheit.classList.add("active");
    celsius.classList.remove("active");
    let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = Math.round(fahrenheitTemp);
  }
  
  function convertCelsiusTemp(event) {
    event.preventDefault();
    celsius.classList.add("active");
    fahrenheit.classList.remove("active");
    let temperature = document.querySelector("#temp");
    temperature.innerHTML = Math.round(celsiusTemp);
  }
  
  let celsiusTemp = null;
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchSubmit);
  
  let fahrenheit = document.querySelector("#f-link");
  fahrenheit.addEventListener("click", convertFahTemp);
  
  let celsius = document.querySelector("#celsius-link");
  celsius.addEventListener("click", convertCelsiusTemp);
  