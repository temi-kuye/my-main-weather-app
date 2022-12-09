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
    temperature.innerHTML = Math.round(response.data.main.temp);
    city.innerHTML = response.data.name;
    condition.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = Math.round(response.data.main.humidity);
    wind.innerHTML = Math.round(response.data.wind.speed);
    date.innerHTML = formatDate(response.data.dt * 1000);
  }
  
  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemp);
  