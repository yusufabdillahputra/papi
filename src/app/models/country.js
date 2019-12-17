const { post, get, put, search, drop } = require('../../helper/db')

const table = 'tbl_country'
const primaryKey = 'id_country'

module.exports = {
  createData: async (req) => {
    return new Promise((resolve, reject) => {
      const prepare = {
        sql: `INSERT INTO ${table} SET ?`,
        values: req.body
      }
      post(prepare, resolve, reject)
    })
  },
  readAll: async (req) => {
    return new Promise((resolve, reject) => {
      if (req.query.fn) {
        const prepare = search(req, table, primaryKey, 'name_country')
        get(prepare, resolve, reject)
      } else {
        const prepare = {
          sql: `SELECT * FROM ${table} ORDER BY name_country ASC`
        }
        get(prepare, resolve, reject)
      }
    })
  },
  updateData: async (req) => {
    return new Promise((resolve, reject) => {
      const prepare = {
        sql: `UPDATE ${table} SET ? WHERE ${primaryKey} = ?`,
        values: [
          req.body,
          req.params[primaryKey]
        ]
      }
      put(prepare, resolve, reject)
    })
  },
  deleteData: async (req) => {
    return new Promise((resolve, reject) => {
      const prepare = {
        sql: `DELETE FROM ${table} WHERE ${primaryKey} = ?`,
        values: req.params[primaryKey]
      }
      drop(prepare, resolve, reject)
    })
  }

}
