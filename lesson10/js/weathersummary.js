const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";
const apiURL2 = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";

fetch(apiURL)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  document.getElementById('current-description').textContent = data.weather[0].description;
  document.getElementById('temperature').textContent = data.main.temp;
  document.getElementById('humidity').textContent = data.main.humidity;
  document.getElementById('wind-speed').textContent = data.wind.speed;


});

fetch(apiURL2)
.then((response) => response.json())
.then((data) => {
    console.log(data);

    let day = 1;

    const dayofWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    const fiveDayForecast = data.list.filter((forecast) =>

      forecast.dt_txt.includes("18:00:00")

    );

    fiveDayForecast.forEach((x) => {

      let d = new Date(x.dt_txt);

      document.querySelector(`#day${day}`).textContent =
        dayofWeek[d.getDay()];

      document.querySelector(`#temp${day}`).textContent =
        x.main.temp.toFixed(0);

      let iconimg = document.createElement("img");

      const imagesrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;

      const desc = x.weather[0].description;

      iconimg.setAttribute("src", imagesrc);

      iconimg.setAttribute("alt", desc);

      document.querySelector(`#icon${day}`).appendChild(iconimg);

      day++;
    });
});