function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `${0[hours]}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `${0[minutes]}`;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDate() - 1];
    return `${day} ${hours}:${minutes}`;
}

function showTemp(response){
    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);

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

    let iconApi = response.data.weather[0].icon;
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
        "src", `http://openweathermap.org/img/wn/${iconApi}@2x.png`
    );
    iconElement.setAttribute(
        "alt", response.data.weather[0].description);
}

let apiKey = "ca1884a51c72d345d98c6a29cd188093";
let cityName = "Los Angeles";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(showTemp);