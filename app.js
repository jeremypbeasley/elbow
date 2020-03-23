// Environment
require('dotenv').config();

// const contentfulAPIKey = 'RAljEgwmx1GdP0O6C25roDbf57xL0dPBS4OTEtYWFqA'

// Tools
// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
// const _ = require('lodash');
// const getJSON = require('get-json');
// const request = require('superagent');
// const nodemailer = require('nodemailer');
// const moment = require('moment');
// const contentful = require('contentful');
// const util = require('util')
//
// // Settings
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.set('view engine', 'ejs');
//
// // Contentful
// const client = contentful.createClient({
//   space: 'g78w26mus04v',
//   accessToken: 'z32xbTuN-ny-cOm_UIURFeZ8tYt5Ya3_GC74osoG8gI',
//   locale: 'en-US'
// });
//
// app.get('/', (req, res) =>
//   client.getEntries({locale: 'en-US'})
//     // .then(entry => console.log(util.inspect(entry, {showHidden: false, depth: null}))
//     .then (
//       posts => res.render('index', { posts: posts.items })
//       // entry => console.log(util.inspect(entry, {showHidden: false, depth: null}))
//     )
//     // .catch(err => console.log(err))
// );
//
// // Listening
// app.listen(process.env.PORT || 9000);


// -----


var express = require('express')
var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var compression = require('compression')
var helmet = require('helmet')
var restaurants = require('./routes/restaurants')

var app = express()

// view engine setup
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

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = app
