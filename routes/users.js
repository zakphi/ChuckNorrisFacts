const express = require('express')
const usersRoutes = express.Router()
const usersController = require('../controllers/users')

usersRoutes.get('/', usersController.index)

module.exports = usersRoutes