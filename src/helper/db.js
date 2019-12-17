require('dotenv/config')
const connection = require('../config/mysql')

module.exports = {
  connection,
  query: (prepare, resolve, reject) => {
    connection.query(prepare, (error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  }
}
