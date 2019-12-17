const Router = require('express').Router()

const {
  createData,
  readAll
} = require('../controllers/country')

Router
.post('/', createData)
.get('/', readAll)

module.exports = Router
