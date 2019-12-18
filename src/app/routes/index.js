const Router = require('express').Router()

const home = require('./home')
const country = require('./country')
const airport = require('./airport')
const users = require('./users')

Router
  .use('/', home)
  .use('/country', country)
  .use('/airport', airport)
  .use('/users', users)

module.exports = Router
