require('dotenv/config')
const conn = require('../config/mysql')

module.exports = {
  conn,
  get: (prepare, resolve, reject) => {
    conn.query(prepare.sql, function (error, result) {
      if (error) reject(error)
      console.log(result)
      resolve(result)
    })
  },
  post: (prepare, resolve, reject) => {
    conn.query(prepare.sql, prepare.values, function (error, result) {
      if (error) reject(error)
      resolve(result)
    })
  },
  put: (prepare, resolve, reject) => {
    conn.query(prepare.sql, prepare.values, function (error, result) {
      if (error) reject(error)
      resolve(result)
    })
  },
  delete: (prepare, resolve, reject) => {
    conn.query(prepare.sql, prepare.values, function (error, result) {
      if (error) reject(error)
      resolve(result)
    })
  }
}
