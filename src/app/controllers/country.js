const { response } = require('../../helper/response')
const countryModel = require('../models/country')

module.exports = {

  createData: async (req, res) => {
    try {
      const model = await countryModel.createData(req)
      response(res, 200, 200, model)
    } catch (error) {
      response(res, 200, 200, error)
    }
  }

}
