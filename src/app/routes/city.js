const Router = require('express').Router()

const primaryKey = 'id_city'

const {
    createData,
    readAll,
    updateData,
    deleteData
} = require ('../controllers/city')

Router
 .post('/', createData)
 .get('/', readAll)
 .put(`/:${primaryKey}`, updateData)
 .delete(`/:${primaryKey}`, deleteData)

 module.exports = Router