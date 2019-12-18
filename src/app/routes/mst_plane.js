const Router = require('express').Router()

const primaryKey = 'id_mst_plane'

const {
  createData,
  readAll,
  updateData,
  deleteData
} = require('../controllers/mst_plane')

Router
  .post('/', createData)
  .get('/', readAll)
  .put(`/:${primaryKey}`, updateData)
  .delete(`/:${primaryKey}`, deleteData)

module.exports = Router
