const express = require('express')
const factsRoutes = express.Router()
const factsController = require('../controllers/facts')

factsRoutes.post('/', factsController.create)

factsRoutes.delete('/:id', factsController.delete)

module.exports = factsRoutes