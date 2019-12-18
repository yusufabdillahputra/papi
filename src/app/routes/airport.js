const Router = require('express').Router()

const primaryKey = 'id_airport'

const {
  createData,
  readAll,
  updateData,
  deleteData
} = require('../controllers/airport')

Router
  .post('/', createData)
  .get('/', readAll)
  .put(`/:${primaryKey}`, updateData)
  .delete(`/:${primaryKey}`, deleteData)

module.exports = Router
