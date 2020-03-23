// Environment
require('dotenv').config();

// Required Shit
var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var compression = require('compression')
var helmet = require('helmet')
var restaurants = require('./routes/restaurants')

var app = express()

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('view cache', true)
app.use(helmet()) // protect from well known vulnerabilities
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(compression())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', restaurants)
app.use('/restaurants', restaurants)

// 404
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = app
