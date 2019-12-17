const { response } = require('../../helper/response')
const { dotEnv } = require('../../helper/path')

module.exports = {

  landing: (req, res) => {
    try {
      response(res, 200, 200, {
        PAPI : {
          baseUrl: dotEnv('BASE_URL'),
          port: dotEnv('SERVER_PORT'),
          status: 'Development'
        }
      })
    } catch (error) {
      response(res, 200, 200, error)
    }
  }

}
