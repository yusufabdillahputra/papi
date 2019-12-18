const { response } = require('../../helper/response')
//const airportModel = require('../models/airport')
const airportModel = require('../models/airport')

module.exports = {

  createData: async (req, res) => {
    try {
      const model = await airportModel.createData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  readAll: async (req, res) => {
    try {
      const model = await airportModel.readAll(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  updateData: async (req, res) => {
    try {
      const model = await airportModel.updateData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  deleteData: async (req, res) =>  {
    try {
      const model = await airportModel.deleteData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  }

}