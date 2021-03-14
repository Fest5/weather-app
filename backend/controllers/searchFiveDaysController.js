const asyncHandler = require("express-async-handler") 
const axios = require('axios') 

const searchFiveDays = asyncHandler( async (req, res) => {
    const city = req.params.city
    const lat = req.query.lat
    const lon = req.query.lon
    
    const fiveDays = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=currently,hourly,minutely,alerts&units=metric&appid=${process.env.WEATHER_API_KEY}`)
    
    console.log(fiveDays)
  

    res.status(200).json({
        message: `This is the weather for 5 days for your city: ${city}`,
        all: fiveDays.data,
        daily: fiveDays.data.daily.slice(0, 5)
    })
    
})

module.exports = searchFiveDays