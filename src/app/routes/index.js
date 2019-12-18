const Router = require('express').Router()

const home = require('./home')
const country = require('./country')
const users = require('./users')
const city = require('./city')
const passenger = require('./passenger')
const orderPlane = require('./orderPlane')

Router
  .use('/', home)
  .use('/country', country)
  .use('/users', users)
  .use('/city', city)
  .use('/passenger', passenger)
  .use('/orderpl', orderPlane)

module.exports = Router
