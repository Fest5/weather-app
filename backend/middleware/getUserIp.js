const axios = require('axios')

//Get user ip and request the city

const getIp = async (req, res, next) => {
    const ip = req.ip
    req.ip = ip
    
    try {
        const response = await axios.get(`http://ip-api.com/json/${ip}`)
        req.city = response
        //console.log(response)
    } catch(err) {
        console.log(err)
    }
    
    next()
}

module.exports = getIp