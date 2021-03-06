const asyncHandler = require("express-async-handler") 
const axios = require('axios') 

// Controller to request only the current weather and simplifying the api response

const searchLocation = asyncHandler( async (req, res) => {
    const city = req.params.city
    
    try {
        const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_API_KEY}`)
    //console.log(currentWeather.data) 
  

    res.status(200).json({
        message: `This is the weather for your city: ${city}`,
        all: currentWeather.data,
        name: currentWeather.data.name,
        coord: currentWeather.data.coord,
        id: currentWeather.data.id,
        main: currentWeather.data.main,
        todayWeather: currentWeather.data.weather[0],
        wind: currentWeather.data.wind
    })
    } catch(err) {
        res.status(err.response.status).json({
            message: "City not found"
        })
    }
    
    
})

module.exports = searchLocation