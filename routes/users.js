const express = require('express')
const usersRoutes = express.Router()
const usersController = require('../controllers/users')
const authHelper = require('../services/auth/helpers')

usersRoutes.get('/', authHelper.loginRequired, usersController.index)

module.exports = usersRoutes