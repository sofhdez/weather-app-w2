function showTemp(response){
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    let descriptionElement = document.querySelector("#description")
    descriptionElement.innerHTML = response.data.weather[0].description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "ca1884a51c72d345d98c6a29cd188093";
let cityName = "New York";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemp);