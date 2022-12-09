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
  }
  
  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayTemp);
  