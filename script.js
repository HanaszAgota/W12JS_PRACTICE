// async function fetchData (url) {
//     const response = await fetchData(url)
//     return response.json()
// }

// async function init() {
//     const data = await fetchData('https://restcountries.com/v3.1/all')
//     console.log(data)
// }

// init()

const filterComponent = () => ` 
    <inpit type="number">
    <button>filter</button> 
    `

const onFilter = (countriesArr, minPop) => countriesArr.filter(country => country.pop > minPop)

const countryComponent = ({ name, pop, area, lang}) => { 

    return ` 
     <div class="country">
        <h2>${name}</h2>
        <h3>pop: ${pop}</h3>
        <h4>area: ${area}</h4>
        <h5>lang: ${lang.join(', ')}</h5>
     </div>
    `
}

const init = async () => {
    const rootElement = document.querySelector('#root')
    rootElement.insertAdjacentHTML('beforebegin', filterComponent())
    
const buttonElement = document.querySelector('button')
buttonElement.addEventListener('click', () => {
    const filteredCountries = filteredCountries(countries, document.querySelector('input').value)
    rootElement.innerHTML = ""
    filteredCountries.forEach(coutry => {
        rootElement.insertAdjacentElement('beforeend', countryComponent(country))
    });
})

    const countriesData = await fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
  
    const countries = countriesData.map(countryData => {
        return {
            name: countryData.name.common,
            pop: countryData.population,
            area: countryData.area,
            lang: countryData.languages ? Object.keys(countryData.languages).map(lang => countryData.languages[lang]) : []
        }  
    })

//    countries.map(country => rootElement.insertAdjacentHTML('beforeend', countryComponent(country)))
countries.forEach(country => {
    rootElement.insertAdjacentHTML('beforeend', countryComponent(country))
});
}

init()
