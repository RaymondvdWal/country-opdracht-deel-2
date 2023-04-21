import axios from "axios";

console.log('Hallo daar!');

async function fetchCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response);
        const countriesOnScreen = document.getElementById("countries")
        const data = response.data.map((data)=>{
            return {name:data.name.common, flags:data.flags, region:data.region, population:data.population}
        })
        data.sort((a,b)=>{ return a.population - b.population})
        console.log(data)
        for (let i = 0; i < response.data.length; i++) {
            countriesOnScreen.innerHTML += `<div class="${regionColor(data[i].region)}"><li></li> <img class="flags" src="${data[i].flags.png}" alt="${data[i].flags.alt}"> <span class="${regionColor(data[i].region)}">${data[i].name}</span>
            <li></li>Has a population of ${data[i].population} people</div>`
        }
    } catch(e) {
        console.error(e);
    }
}
function regionColor(region) {
    switch (region){
        case "Africa":
            return "blue";
        case "North-America":
            return "darkgreen";
        case "Asia":
            return "red";
        case "Europe":
            return "yellow";
        case "Oceania":
            return "purple";
        case "Antarctic":
            return "white";
        case "South-America":
            return "lightgreen"
    }

}

/*response.data[0].name.common*/
fetchCountries()
