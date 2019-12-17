const Router = require('express').Router()

const primaryKey = 'id_country'

const {
  createData,
  readAll,
  updateData,
  deleteData
} = require('../controllers/country')

Router
  .post('/', createData)
  .get('/', readAll)
  .put(`/:${primaryKey}`, updateData)
  .delete(`/:${primaryKey}`, deleteData)

module.exports = Router
