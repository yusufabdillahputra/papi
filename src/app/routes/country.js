const Router = require('express').Router()

const {
  createData
} = require('../controllers/country')

Router
.post('/', createData)

module.exports = Router
