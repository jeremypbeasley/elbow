var express = require('express')
var router = express.Router()
var restaurants = require('../services/restaurants')
var util = require('util')


/* router params */
router.param('slug', function (req, res, next, slug) {
  restaurants.getRestaurants(slug).then(function (restaurant) {
    req.restaurant = restaurant.items[0]
    next()
  }).catch(function (err) {
    console.log('restaurants.js - getRestaurant (line 7) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.use(function (req, res, next) {
  restaurants.getRestaurants().then(function (restaurantCollection) {
    req.restaurants = restaurantCollection.items
    next()
  }).catch(function (err) {
    console.log('restaurants.js - getRestaurants (line 17) error:', JSON.stringify(err,null,2))
    next()
  })
})

router.get('/:slug', function (req, res, next) {
  // console.log(req.restaurant);
  console.log(util.inspect(req.restaurant.fields, {showHidden: false, depth: null}))
  res.render('restaurant', {title: req.restaurant.fields.name, restaurant: req.restaurant})
})

router.get('/', function (req, res, next) {
  // console.log(req.restaurants);
  res.render('index', {
    'title': 'Restaurants',
    'restaurants': req.restaurants
  })
})

module.exports = router