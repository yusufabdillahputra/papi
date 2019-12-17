const conn = require('../../config/mysql')
const table = 'tbl_country'
const primaryKey = 'id_country'

module.exports = {

  createData : async (req) => {
    new Promise((resolve, reject) => {
      conn.query(`INSERT INTO ${table} SET ?`, req.body, function (error, result) {
        if (error) reject(error)
        resolve(result)
      })
    })
  }

}
