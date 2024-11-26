const API_KEY = "a2b376a5d7790fa606f1f9f392e48118";
const API = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchText = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(API + `&q=${city}` + `&appid=${API_KEY}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    // Updating data based on data recieved from open weather api
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    console.log(data.weather[0].main);

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
      case "Snow":
        weatherIcon.src = "images/snow.png";
        break;
      default:
        weatherIcon.src = "images/clouds.png";
        break;
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

document.querySelector(".error").style.display = "none";
searchBtn.addEventListener("click", () => {
  checkWeather(searchText.value);
});
