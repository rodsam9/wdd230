
const d = new Date()
const year = d.getFullYear()
const date = d.getDate()
const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
const monthName = month[d.getMonth()]
const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const dayName = day[d.getDay()]
const fullDate = `${dayName}, ${monthName} ${date}, ${year}`

document.getElementById('time').textContent = fullDate;
