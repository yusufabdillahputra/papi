require('dotenv/config')
const connection = require('../config/mysql')

module.exports = {
  connection,
  query: (prepare, resolve, reject) => {
    connection.query({
      sql: prepare.sql,
      values: prepare.values
    }, function (error, result, fields) {
      connection.release()
      if (error) reject(error)
      resolve(result)
    })
  },
  post: (prepare, resolve, reject) => {
    connection.query(prepare.sql, prepare.values, function (error, result) {
      if (error) reject(error)
      resolve(result)
    })
  }
}
