const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7c244b2f0f7c630109f09f0def8b7866";

fetch(apiURL)
fetch(apiURL)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  document.getElementById('current-temp').textContent = data.main.temp;
  const imagesrc = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';  // note the concatenation
  const desc = data.weather[0].description;  // note how we reference the weather array
  document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
  document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('alt', desc);
});



