const urlBase = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = "API-KEY"
const diffKelvin = 273.15

document.getElementById("searchButton").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if(city){
        fetchWeather(city)
    }else{
        alert("Ingrese una ciudad válida.")
    }
}) 

function fetchWeather(city){
    fetch (`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResData = document.getElementById("resData")
    divResData.innerHTML = ""

    const countryName = data.sys.country
    const cityName = data.name
    const temp = data.main.temp
    const feelsLike = data.main.feels_like
    const tempMin = data.main.temp_min
    const tempMax = data.main.temp_max
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement("h2")
    cityInfo.textContent = `${countryName}, ${cityName}`

    const tempInfo = document.createElement("p")
    tempInfo.textContent = `Temperatura: ${Math.floor(temp-diffKelvin)}°C`

    const tempMinInfo = document.createElement("p")
    tempMinInfo.textContent = `Mínima: ${Math.floor(tempMin-diffKelvin)}°C`

    const tempMaxInfo = document.createElement("p")
    tempMaxInfo.textContent = `Máxima: ${Math.floor(tempMax-diffKelvin)}°C`

    const feelsLikeInfo = document.createElement("p")
    feelsLikeInfo.textContent = `Sensación térmica: ${Math.floor(feelsLike-diffKelvin)}°C`

    const humidityInfo = document.createElement("p")
    humidityInfo.textContent = `Humedad: ${humidity}%`

    const icoInfo = document.createElement("img")
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement("p")
    descriptionInfo.textContent = `Clima: ${description}`

    divResData.appendChild(cityInfo)
    divResData.appendChild(descriptionInfo)
    divResData.appendChild(icoInfo)
    divResData.appendChild(tempInfo)
    divResData.appendChild(tempMinInfo)
    divResData.appendChild(tempMaxInfo)
    divResData.appendChild(feelsLikeInfo)
    divResData.appendChild(humidityInfo)
}