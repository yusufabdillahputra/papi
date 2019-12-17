require('dotenv/config')

module.exports = {
  dotEnv: (ENV) => {
    return process.env[ENV]
  },
}
