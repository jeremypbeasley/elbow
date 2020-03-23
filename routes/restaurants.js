var express = require('express')
var router = express.Router()
var restaurants = require('../services/restaurants')

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
  res.render('restaurant', {title: req.restaurant.fields.name, restaurant: req.restaurant})
})

router.get('/restaurants', function (req, res, next) {
  res.render('restaurants', {
    'title': 'Restaurants',
    'restaurants': req.restaurants
  })
})

router.get('/', function (req, res, next) {
  console.log(req.restaurants);
  res.render('index', {
    'title': 'Restaurants',
    'restaurants': req.restaurants
  })
})

module.exports = router