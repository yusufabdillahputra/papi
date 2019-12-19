const { response } = require('../../helper/response')
const transactionModel = require('../models/transactionPlane')

module.exports = {
    
    createData: async (req,res) => {
        try {
            const model = await transactionModel.createData(req)
            await response (res,200, 200, model)
        } catch (error) {
            await response (res, 200, 200, error)
        }
    },
    readAll: async (req, res) => {
        try {
            const model = await transactionModel.readAll(req)
            await response (res, 200, 200, model)
        } catch (error) {
            await response (res, 200, 200, error)
        }
    },
    updateData: async (req, res) => {
        try {
            const model = await transactionModel.updateData(req)
            await response (res,200 ,200, model)
        } catch (error) {
            await response (res, 200, 200, error)
        }
    },
    deleteData: async (req, res) => {
        try {
            const model = await transactionModel.deleteData(req)
            await response (res, 200, 200, model)
        } catch (error) {
            await response (res, 200, 200, error)
        }
    }
}