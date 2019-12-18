const {response} = require('../../helper/response.js')
const passengerModel = require('../models/passenger')

module.exports={

    createData: async (req, res) => {
        try{
            const model = await passengerModel.createData(req)
            await response (res, 200, 200, model)
        } catch (error) {
            await response (res, 200, 200, error)
        }
    },
    readAll: async (req,res) => {
        try{
            const model = await passengerModel.readAll(req)
            await response (res, 200, 200, model)
        } catch (error) {
            await response ( res, 200, 200, error)
        }
    },
    updateData: async (req, res) => {
        try{
            const model= await passengerModel.updateData(req)
            await response (res, 200, 200, model)
        } catch(error) {
            await response (res, 200, 200, error)
        }
    }, 
    deleteData: async (req, res) => {
       try{ 
            const model= await passengerModel.deleteData(req)
            await response (res, 200, 200, model)
        } catch(error) {
            await response (res, 200, 200, error)
        }
    }
}
