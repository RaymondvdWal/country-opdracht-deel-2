import axios from "axios";

console.log("test");
const input = document.getElementById("inputField")
let url = `https://restcountries.com/v3.1/name/`
const form = document.getElementById("search-a-country")
const result = document.getElementById("result")
const reset = document.getElementById("reset-button")
input.addEventListener("keyup", (e)=>{
    url = `https://restcountries.com/v3.1/name/${e.target.value}`
})

reset.addEventListener("click", ()=>{
    window.location.reload()
})
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(input.value)
    console.log(url)
    fetchCountrySearch()
})

    async function fetchCountrySearch() {
    try {
        const response = await axios.get(url);
        const data = response.data.map((data) => {
            return {
                name: data.name.common, flags: data.flags, region: data.region, population: data.population,
                capital: data.capital, languages: data.languages, currency: data.currencies
             }
        })
        console.log(data)

        for (let i = 0; i < data.length; i++) {
            let currencyValue = Object.keys(data[i].currency)
            let language = Object.values(data[i].languages)
            let currency;
            let extraCurrency
            if (currencyValue.length <2 ) {
                currency = Object.values(data[i].currency[currencyValue])
            } else {
                currency = Object.values(data[i].currency[currencyValue[0]])
                extraCurrency = Object.values(data[i].currency[currencyValue[1]])
                extraCurrency = extraCurrency.filter((value, index)=>{
                    return value.length > 3;
                })
            }
            currency = currency.filter((value, index)=>{
                return value.length > 3;
            })

            console.log(extraCurrency)
            console.log(currency)
            console.log(language)
            console.log(currencyValue)

        if (currencyValue.length <2) {
            result.innerHTML +=`<div class="result-country"><img class="flag" src="${data[i].flags.png}" alt="${data[i].flags.alt}"> ${data[i].name} is situated in ${data[i].region}. It has a population of ${data[i].population} people.
        The capital is ${data[i].capital} and you can pay with ${currency}'s.
        They speak ${language}</div>`
        } else {
            result.innerHTML += `<div class="result-country">${data[i].name} is situated in ${data[i].region}. It has a population of ${data[i].population} people.
        The capital is ${data[i].capital} and you can pay with ${currency}'s and with ${extraCurrency}.
        They speak ${language}</div>`
        }
        }


    } catch (e){
        console.error(e)
    }
}




