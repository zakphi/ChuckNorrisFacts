const express = require('express')
const authRouter = express.Router()
const passport = require('../services/auth/local')
const authHelper = require('../services/auth/helpers')
const usersController = require('../controllers/users')

authRouter.get('/login', authHelper.loginRedirect, (req, res) => {
  res.render('auth/login', {
    currentPage: 'login'
  })
})

authRouter.get('/register', authHelper.loginRedirect, (req, res) => {
  res.render('auth/register', {
    currentPage: 'register'
  })
})

authRouter.post('/register', usersController.create)

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
)

authRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

module.exports = authRouter