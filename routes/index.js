var express = require('express')
var router = express.Router()
var restaurants = require('../services/restaurants')

/* GET home page. */
router.use(function (req, res, next) {
  restaurants.getRestaurants().then(function (restaurantCollection) {
    req.restaurants = restaurantCollection
    next()
  }).catch(function (err) {
    console.log('index.js - getRestaurants (line 7) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('restaurants', {
    'title': 'Restaurants',
    'restaurants': req.restaurants
  })
})

module.exports = router