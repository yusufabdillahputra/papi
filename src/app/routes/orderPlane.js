const Router = require('express').Router()

const primaryKey = 'id_order_plane'

const {
  createData,
  readAll,
  updateData,
  deleteData
} = require('../controllers/orderPlane')

Router
  .post('/', createData)
  .get('/', readAll)
  .put(`/:${primaryKey}`, updateData)
  .delete(`/:${primaryKey}`, deleteData)

module.exports = Router
