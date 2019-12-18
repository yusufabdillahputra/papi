const { response } = require('../../helper/response')
const orderPlaneModel = require('../models/orderPlane')

module.exports = {

  createData: async (req, res) => {
    try {
      const model = await orderPlaneModel.createData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  readAll: async (req, res) => {
    try {
      const model = await orderPlaneModel.readAll(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  updateData: async (req, res) => {
    try {
      const model = await orderPlaneModel.updateData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  deleteData: async (req, res) =>  {
    try {
      const model = await orderPlaneModel.deleteData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  }

}
