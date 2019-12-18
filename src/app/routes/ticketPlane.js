const Router = require('express').Router()

const primaryKey = 'id_ticket_plane'

const {
  createData,
  readAll,
  updateData,
  deleteData
} = require('../controllers/ticketPlane')

Router
  .post('/', createData)
  .get('/', readAll)
  .put(`/:${primaryKey}`, updateData)
  .delete(`/:${primaryKey}`, deleteData)

module.exports = Router
