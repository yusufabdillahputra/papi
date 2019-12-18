const Router = require('express').Router()

const primaryKey = 'id_transaction_plane'

const {
  createData,
  readAll,
  updateData,
  deleteData
} = require('../controllers/transactionPlane')

Router
  .post('/', createData)
  .get('/', readAll)
  .put(`/:${primaryKey}`, updateData)
  .delete(`/:${primaryKey}`, deleteData)

module.exports = Router
