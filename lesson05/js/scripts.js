const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => 
{mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on

window.onresize = () => {if (window.innerWidth > 760)
    mainnav.classList.remove('responsive')};



const date = new Date();
document.getElementById('time').innerHTML = date.toDateString();