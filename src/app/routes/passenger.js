const Router = require('express').Router()

const primaryKey = 'id_passenger'

const{
    createData,
    readAll,
    updateData,
    deleteData
} =require('../controllers/passenger')

Router
.post('/', createData)
.get('/', readAll)
.put(`/:${primaryKey}`, updateData)
.delete(`/:${primaryKey}`, deleteData)

module.exports = Router