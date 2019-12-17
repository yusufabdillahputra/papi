const { post } = require('../../helper/db')
const table = 'tbl_country'
const primaryKey = 'id_country'

module.exports = {

  createData : async (req) => {
    new Promise((resolve, reject) => {
      const prepare = {
        sql : `INSERT INTO ${table} INTO (name_country, created_by) VALUES (?,?)`,
        values : [
          req.body.name_country,
          req.body.created_by,
        ]
      }
      post(prepare, resolve, reject)
    })
  }

}
