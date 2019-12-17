const Router = require('express').Router()

const primaryKey = 'id_users'

const {
  createData,
  readAll,
  updateData,
  deleteData
} = require('../controllers/users')

Router
  .post('/', createData)
  .get('/', readAll)
  .put(`/:${primaryKey}`, updateData)
  .delete(`/:${primaryKey}`, deleteData)

module.exports = Router
