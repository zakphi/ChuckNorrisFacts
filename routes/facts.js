const express = require('express')
const factsRoutes = express.Router()
const factsController = require('../controllers/facts')

factsRoutes.post('/', factsController.create)

module.exports = factsRoutes