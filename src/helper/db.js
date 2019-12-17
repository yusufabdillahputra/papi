require('dotenv/config')
const conn = require('../config/mysql')

module.exports = {
  conn,
  query: (prepare, resolve, reject) => {
    conn.query({
      sql: prepare.sql,
      values: prepare.values
    }, function (error, result, fields) {
      connection.release()
      if (error) reject(error)
      resolve(result)
    })
  },
  post: (prepare, resolve, reject) => {
    return conn.query(prepare.sql, prepare.values, function (error, result) {
      if (error) reject(error)
      resolve(result)
    })
  }
}
