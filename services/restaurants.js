var client = require('./contentfulClient').client

function getRestaurants (slug, query) {
  // little trick to get an entry with include
  // this way all linked items will be resolved for us
  query = query || {}
  query['content_type'] = 'restaurant'
  query['fields.slug'] = slug
  return client.getEntries(query)
}

module.exports = {
  getRestaurants,
  getRestaurants,
}