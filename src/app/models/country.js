const { post } = require('../../helper/db')
const table = 'tbl_country'
const primaryKey = 'id_country'

module.exports = {

  createData : async (req) => {
    new Promise((resolve, reject) => {
      const prepare = {
        sql : `INSERT INTO ${table} SET ?`,
        values : req.body
      }
      post(prepare, resolve, reject)
    })
  }

}
