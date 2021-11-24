const apiURLpreston = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";
const apiURL2preston = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";

fetch(apiURLpreston)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  document.getElementById('preston-current-description').textContent = data.weather[0].description;
  document.getElementById('preston-temperature').textContent = data.main.temp;
  document.getElementById('preston-humidity').textContent = data.main.humidity;
  document.getElementById('preston-wind-speed').textContent = data.wind.speed;


});

fetch(apiURL2preston)
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

      document.querySelector(`#preston-icon${day}`).appendChild(iconimg);

      day++;
    });
});


// API for sodasprings
const apiURLsodasprings = "http://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";
const apiURL2sodasprings = "http://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";

fetch(apiURLsodasprings)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  document.getElementById('sodasprings-current-description').textContent = data.weather[0].description;
  document.getElementById('sodasprings-temperature').textContent = data.main.temp;
  document.getElementById('sodasprings-humidity').textContent = data.main.humidity;
  document.getElementById('sodasprings-wind-speed').textContent = data.wind.speed;


});

fetch(apiURL2sodasprings)
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

      document.querySelector(`#sodasprings-icon${day}`).appendChild(iconimg);

      day++;
    });
});

// API for fish haven
const apiURLfishhaven = "http://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";
const apiURL2fishhaven = "http://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";

fetch(apiURLfishhaven)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  document.getElementById('fishhaven-current-description').textContent = data.weather[0].description;
  document.getElementById('fishhaven-temperature').textContent = data.main.temp;
  document.getElementById('fishhaven-humidity').textContent = data.main.humidity;
  document.getElementById('fishhaven-wind-speed').textContent = data.wind.speed;


});

fetch(apiURL2fishhaven)
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

      document.querySelector(`#fishhaven-icon${day}`).appendChild(iconimg);

      day++;
    });
});