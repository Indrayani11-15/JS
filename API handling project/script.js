document.addEventListener('DOMContentLoaded', ()=>{
   const cityInput = document.getElementById("city-input")
   const getWeatherBtn = document.getElementById("get-weather-btn")
   const weatherInfo = document.getElementById("weather-info")
   const cityNameDisplay = document.getElementById("city-name")
   const temperatureDisplay = document.getElementById("temperature")
   const descriptionDisplay = document.getElementById("description")
   const errorMessage = document.getElementById("error-message")

   const API_KEY = "485454f081d2756d43cb79bf9c161ff9"; //env variables

   getWeatherBtn.addEventListener('click', async()=>{

        const city = cityInput.value.trim()
        if(!city) return;

        //it may throw an error
        //server/databse is always in another continent

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData);
        } catch (error) {
            showError()
        }



   
   })

   async function fetchWeatherData(city){
    //get the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

    const response = await fetch(url)
    console.log(typeof response);
    console.log("RESPONSE: ", response);

    if(!response.ok){
        throw new Error("City not found")
    }
    const data = await response.json()
    return data
   }



   function displayWeatherData(data){
    console.log(data);
    const {name, main, weather} = data
    cityNameDisplay.textContent = name

    //unlock the display
    weatherInfo.classList.remove('hidden')
    errorMessage.classList.add('hidden')

    temperatureDisplay.textContent = `Temperature : ${main.temp}`
    descriptionDisplay.textContent = `Weather : ${weather[0].description}`

        
   }

   function showError(){
    weatherInfo.classList.add('hidden')
    errorMessage.classList.remove('hidden')
   }



})

