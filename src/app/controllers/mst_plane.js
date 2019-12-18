const { response } = require('../../helper/response')
const mst_planeModel = require('../models/mst_plane')

module.exports = {

  createData: async (req, res) => {
    try {
      const model = await mst_planeModel.createData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  readAll: async (req, res) => {
    try {
      const model = await mst_planeModel.readAll(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  updateData: async (req, res) => {
    try {
      const model = await mst_planeModel.updateData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  deleteData: async (req, res) =>  {
    try {
      const model = await mst_planeModel.deleteData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  }

}
