const Router = require('express').Router()

const home = require('./home')
const country = require('./country')
const airport = require('./airport')
const mst_plane = require('./mst_plane')
const users = require('./users')
const city = require('./city')
const passenger = require('./passenger')
const orderPlane = require('./orderPlane')
const ticketPlane = require('./ticketPlane')
const transactionPlane = require('./transactionPlane')
const auth = require('./auth')

Router
  .use('/', home)
  .use('/auth', auth)
  .use('/country', country)
  .use('/mst_plane', mst_plane)
  .use('/airport', airport)
  .use('/users', users)
  .use('/city', city)
  .use('/passenger', passenger)
  .use('/orderpl', orderPlane)
  .use('/ticketpl', ticketPlane)
  .use('/transactionpl', transactionPlane)

module.exports = Router
