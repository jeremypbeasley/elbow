// Environment
require('dotenv').config();

const contentfulAPIKey = 'RAljEgwmx1GdP0O6C25roDbf57xL0dPBS4OTEtYWFqA'

// Tools
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const _ = require('lodash');
const getJSON = require('get-json');
const request = require('superagent');
const nodemailer = require('nodemailer');
const moment = require('moment');
// const contentful = require('contentful-management');
const contentful = require('contentful');
const util = require('util')

// Settings
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Contentful
const client = contentful.createClient({
  space: 'g78w26mus04v',
  accessToken: 'z32xbTuN-ny-cOm_UIURFeZ8tYt5Ya3_GC74osoG8gI',
  locale: 'en-US'
});
// const client = contentful.createClient({
//   accessToken: 'CFPAT-MWKAKhXEjhyiirN96dMlbCS501tE8y8uqRp6W-GdD5o',
//   locale: 'en-US'
// })

console.log('------------------------------------------------------------')

// app.get('/', (req, res) =>
//   client.getSpace('g78w26mus04v')
//   .then((environment) => environment.getEntries({locale: 'de-fr'}))
//   .then(
//       // (response) => res.render('index', { posts: response.items })
//       (response) => console.log(util.inspect(response.items, {showHidden: false, depth: null}))
//     )
//   );

app.get('/', (req, res) =>
  client.getEntries({locale: 'en-US'})
    // .then(entry => console.log(util.inspect(entry, {showHidden: false, depth: null}))
    .then (
      response => res.render('index', { posts: response.items })
      // entry => console.log(util.inspect(entry, {showHidden: false, depth: null}))
    )
    // .catch(err => console.log(err))

);

// Listening
app.listen(process.env.PORT || 8000);



//
//
// client.getEntries({locale: 'en-US'})
//   .then(entry => console.log(util.inspect(entry, {showHidden: false, depth: null})))
//   .catch(err => console.log(err));
