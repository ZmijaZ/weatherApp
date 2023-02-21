
// const img = document.querySelector('img');

// async function getMVP(){
//     const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=hgIKmZjANOXuCYWXTsCy9CYFz5ychwAF&s=jokic');

//     const data = await response.json();
//     img.src = data.data.images.original.url;

// }
// getMVP();

const townInput = document.querySelector("#townInput");
const searchButton = document.querySelector("#searchButton");

const weatherTown = document.querySelector("#weatherTown");
const weatherTemp = document.querySelector("#weatherTemp");
const weatherWeather = document.querySelector("#weatherWeather");

const weatherFeels = document.querySelector("#weatherFeels");
const weatherPressure = document.querySelector("#weatherPressure");
const weatherHumidity = document.querySelector("#weatherHumidity");
const weatherTimezone = document.querySelector("#weatherTimeZone");

const weather = document.querySelector("#weather");

searchButton.addEventListener('click', async ()=>{
    const townName = townInput.value;
    townInput.value = "";

    const weatherObject = await getWeather(townName);

    weatherTown.innerText = `Name: ${weatherObject.name}`
    weatherTemp.innerText = `Temperature: ${(weatherObject.main.temp-273.15).toFixed(0)} C`
    weatherWeather.innerText = `Weather: ${weatherObject.weather[0].description}`

    weatherFeels.innerText = `FeelsLike: ${(weatherObject.main.feels_like-273.15).toFixed(0)} C`
    weatherPressure.innerText = `Pressure: ${weatherObject.main.pressure} mb`
    weatherHumidity.innerText = `Humidity: ${weatherObject.main.humidity} g/m3`

    const timeZone = weatherObject.timezone > 0 ? "+" : ""; 
    weatherTimezone.innerText = `Timezone: ${timeZone}${weatherObject.timezone/3600}`

    weather.style.visibility = "visible"

} )

async function getWeather(town){

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${town}&APPID=d3a476dbc5f9a294e47e9e0ea96352fb`)
        const data = await response.json();
        console.log(data);
        return data;

    }catch(error){
        console.log("ERROR:\n", error);
    }
}