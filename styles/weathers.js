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
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchSubmit);
  