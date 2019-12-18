const {response} = require('../../helper/response')
cityModel = require('../models/city')

module.exports={

    createData: async (req,res)=> {
        try{    
            const model = await cityModel.createData(req)
            await response(res, 200, 200, model)
        } catch (error) {
            await response(res, 200, 200, error) 
        }
    },
    readAll: async (req,res) => {
        try{
            const model = await cityModel.readAll(req)
            await response(res, 200, 200, model)
        } catch (error) {
            await response(res, 200, 200, error)
        }
    },
    updateData: async (req,res) => {
        try {
            const model = await cityModel.updateData(req)
            await response(res, 200, 200, model)
        } catch (error) {
            await response(res, 200, 200, error)
        }
   },
   deleteData: async (req,res) => {
       try {
           const model = await cityModel.deleteData(req)
           await response(res, 200, 200, model)
       } catch (error) {
           await response(res, 200, 200, error)
       }
   }

}