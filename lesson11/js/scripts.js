const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => 
{mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on

window.onresize = () => {if (window.innerWidth > 760)
    mainnav.classList.remove('responsive')};

const d = new Date()
const year = d.getFullYear()
const date = d.getDate()
const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
const monthName = month[d.getMonth()]
const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const dayName = day[d.getDay()]
const fullDate = `${dayName}, ${monthName} ${date}, ${year}`

document.getElementById('time').textContent = fullDate;

if (d.getDay() == 5){
    document.getElementById('pop-up-message').style.display = "block";
}
else{
    document.getElementById('pop-up-message').style.display = "none";
}

