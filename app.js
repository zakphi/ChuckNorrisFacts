const express = require('express')
const logger = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookiePArser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

const app = express()
require('dotenv').config()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('method'))
app.use(cookiePArser())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static('public'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`alive on port ${port}`)
})

app.get('/', (req, res) => {
  res.render('index', {
    currentPage: 'index',
    pageTitle: 'Chuck Norris facts',
  })
})

const authRoutes = require('./routes/auth')
app.use('/auth', authRoutes)

app.get('*', (req, res) => {
  res.status(404).send('404 not found')
})