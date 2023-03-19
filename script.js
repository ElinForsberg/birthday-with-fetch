
const btn = document.getElementById("btn");

btn.addEventListener("click", getData);



async function getData () {

let year = document.getElementById("year").value;
let month= document.getElementById("month").value;
let day= document.getElementById("day").value;



const response = await
fetch(`https://sholiday.faboul.se/dagar/v2.1/${year}/${month}/${day}`)
const data = await response.json();
const days = data.dagar;
    for (let weekday of days){
        console.log(weekday.veckodag);
        document.getElementById("h1").innerText = `Du är född på en ${weekday.veckodag}`;
    }
}


