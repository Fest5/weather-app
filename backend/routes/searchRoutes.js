const express = require('express')
const searchLocation = require('../controllers/searchLocationController')
const searchFiveDays = require('../controllers/searchFiveDaysController')

//All the routes with the necessary controllers

const router = express.Router()

router.route("/:city").get(searchLocation)
router.route('/:city/fivedays').get(searchFiveDays)

module.exports = router