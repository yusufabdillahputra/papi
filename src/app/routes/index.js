const Router = require('express').Router()

const home = require('./home')
const country = require('./country')
const airport = require('./airport')
const mst_plane = require('./mst_plane')
const users = require('./users')

Router
  .use('/', home)
  .use('/country', country)
  .use('/mst_plane', mst_plane)
  .use('/airport', airport)
  .use('/users', users)

module.exports = Router
