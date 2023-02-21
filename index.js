
// const img = document.querySelector('img');

// async function getMVP(){
//     const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=hgIKmZjANOXuCYWXTsCy9CYFz5ychwAF&s=jokic');

//     const data = await response.json();
//     img.src = data.data.images.original.url;

// }
// getMVP();

const townInput = document.querySelector("#townInput");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener('click', async ()=>{
    const townName = townInput.value;
    townInput.value = "";

    const weatherObject = await getWeather(townName);

    console.log(`Name: ${weatherObject.name}`)
    console.log(`Weather: ${weatherObject.weather[0].description}`)
    console.log(`Temperature: ${weatherObject.main.temp-273.15}`)
    console.log(`FeelsLike: ${weatherObject.main.feels_like-273.15}`);

    console.log(`Pressure: ${weatherObject.main.pressure}mb`)
    console.log(`Humidity: ${weatherObject.main.humidity}%`)

    console.log(`Timezone: +${weatherObject.timezone/3600}`)


    
   

    
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