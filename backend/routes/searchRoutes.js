const express = require('express')
const searchLocation = require('../controllers/searchLocationController')

const router = express.Router()

router.route("/:city").get(searchLocation)

module.exports = router