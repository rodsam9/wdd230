const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let event = document.createElement('p');
    let event2 = document.createElement('p');
    let event3 = document.createElement('p');

    if (towns[0].name == "Soda Springs") {
        event.textContent = towns[0].events[0];
        event2.textContent = towns[0].events[1];
        event3.textContent = towns[0].events[2];
        h2.textContent = "Upcoming Events";
    }

    card.appendChild(h2);
    card.appendChild(event);
    card.appendChild(event2);
    card.appendChild(event3);

    document.querySelector('div.springs-events').appendChild(card); 
  });
