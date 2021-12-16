window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("list").addEventListener("click", function(){
      document.getElementById("wrapper").classList.remove("grid");
    });
    document.getElementById("grid").addEventListener("click", function(){
      document.getElementById("wrapper").classList.add("grid");
    });
  });


fetch("./jsondata/business.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const business = jsonObject['businesses'];

        for(let i = 0; i < business.length; i++) {

            let card = document.createElement('div');
            let name = document.createElement('h2');
            let add = document.createElement('p');
            let phoneNum = document.createElement('p');

            name.textContent = business[i].name;
            add.textContent = business[i].address;
            phoneNum.textContent = business[i].phoneNumber;

            card.appendChild(name);
            card.appendChild(add);
            card.appendChild(phoneNum);

            document.querySelector('#wrapper').appendChild(card); 
        }
        
    })