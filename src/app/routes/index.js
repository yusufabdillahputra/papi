const Router = require('express').Router()

const home = require('./home')
const country = require('./country')

Router
  .use('/', home)
  .use('/country', country)

module.exports = Router
