var contentful = require('contentful')
var config = require('../package.json').config || {}

var client = contentful.createClient({
  accessToken: 'z32xbTuN-ny-cOm_UIURFeZ8tYt5Ya3_GC74osoG8gI',
  space: 'g78w26mus04v'
})

exports.client = client
