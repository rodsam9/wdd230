const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(function(response) {

        return response.json();

    })
    .then(function(jsonObject) {

        console.table(jsonObject);

        const towns = jsonObject['towns'];

        const cityNames = towns.filter(towns => 
            (towns.name == 'Fish Haven' || 
            towns.name == 'Preston' || 
            towns.name == 'Soda Springs'));

        cityNames.forEach(towns => {

            let section = document.createElement('section');

            let name = document.createElement('h2');
            let motto = document.createElement('h3');

            let year = document.createElement('p');
            let population = document.createElement('p');
            let annualRain = document.createElement('p');

            let image = document.createElement('img');
            let alt = document.createElement('alt');

            name.textContent = towns.name;
            motto.textContent = towns.motto;

            year.textContent = 'Year Founded: ' + towns.yearFounded;
            population.textContent = 'Population: ' + towns.currentPopulation;
            annualRain.textContent = 'Annual Rainfall: ' + towns.averageRainfall;

            image.setAttribute("src", `images/${towns.photo}`)
            image.setAttribute("alt", `${towns.name} photo`);
            section.appendChild(name);
            section.appendChild(motto);
            section.appendChild(year);

            section.appendChild(population);
            section.appendChild(annualRain);
            
            section.appendChild(image);
            section.appendChild(alt);

            document.querySelector('div.towns-div').appendChild(section);
        });
    });