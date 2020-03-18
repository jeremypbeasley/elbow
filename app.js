// Environment
require('dotenv').config();

const contentfulAPIKey = 'RAljEgwmx1GdP0O6C25roDbf57xL0dPBS4OTEtYWFqA'

// Tools
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const _ = require("lodash");
const getJSON = require('get-json');
const request = require('superagent');
const nodemailer = require('nodemailer');
const moment = require('moment');
const contentful = require('contentful-management');

// Settings
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Contentful
const client = contentful.createClient({
  accessToken: "CFPAT-MWKAKhXEjhyiirN96dMlbCS501tE8y8uqRp6W-GdD5o"
})

// Initialize the app
// Routes
// app.get("/", (req, res) => {
//    Post.find({}, (err, posts) => {
//       res.render('index', { posts: posts})
//    });
// });

app.get("/", (req, res) =>
  client.getSpace('g78w26mus04v')
  .then((space) => space.getEntries())
  .then(
      (response) => res.render('index', { posts: response.items })
      // (response) => console.log(response.items)
    )
  );

// Listening
app.listen(process.env.PORT || 4000);




