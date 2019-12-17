const { response } = require('../../helper/response')
const usersModel = require('../models/users')

module.exports = {

  createData: async (req, res) => {
    try {
      const model = await usersModel.createData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  readAll: async (req, res) => {
    try {
      const model = await usersModel.readAll(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  updateData: async (req, res) => {
    try {
      const model = await usersModel.updateData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  },
  deleteData: async (req, res) =>  {
    try {
      const model = await usersModel.deleteData(req)
      await response(res, 200, 200, model)
    } catch (error) {
      await response(res, 200, 200, error)
    }
  }

}
