function getNumberOfDays(start, end) {
    const firstDate = start;
    const secondDate = end;
    const aDay = 1000 * 60 * 60 * 24;
    const differenceInTime = secondDate - firstDate;
    const differenceInDays = Math.round(differenceInTime / aDay);
    return differenceInDays;
} 



let newVisit = Date.now() ;
let lastVisit = localStorage.getItem("lastVisit") ;
document.getElementById("last-visit").innerHTML = "Last time visited: " + getNumberOfDays(lastVisit, newVisit) + " days ago.";

localStorage.setItem("lastVisit", newVisit) ;