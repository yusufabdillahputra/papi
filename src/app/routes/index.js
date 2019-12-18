const Router = require('express').Router()

const home = require('./home')
const country = require('./country')
const users = require('./users')
const orderPlane = require('./orderPlane')

Router
  .use('/', home)
  .use('/country', country)
  .use('/users', users)
  .use('/orderpl', orderPlane)

module.exports = Router
