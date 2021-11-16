let temperature = document.getElementById('temperature').textContent;

let speedWind = document.getElementById('wind-speed').textContent;

if(temperature <= 50 && speedWind > 3){
  let wind = Math.pow(speedWind, 0.16);

  let f = 35.74 + 0.6215 * temperature - 35.75 * wind + 0.4275 * temperature * wind;

  let windchill = f.toFixed(0);

  document.getElementById('wind-chill').innerHTML = windchill;
}
