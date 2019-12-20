const { post, get, put, search, drop } = require('../../helper/db')
const { hash } = require('../../helper/bcrypt')

const table = 'tbl_users'
const view = 'vw_users'
const primaryKey = 'id_users'

module.exports = {
  readByLogin: (body) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT ${primaryKey}, password_users, name_users, email_users, remember_token FROM ${view} WHERE email_users = ? LIMIT 1`, body.email_users, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  createRememberToken: (token, id) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET remember_token = ? WHERE ${primaryKey} = ?`, [token, id], (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },
  readRememberToken: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT remember_token FROM ${view} WHERE ${primaryKey} = ? LIMIT 1`, id, (err, result) => {
        if (err) reject(err)
        resolve(result[0].remember_token)
      })
    })
  },
  destroyRememberToken: (id) => {
    return new Promise((resolve, reject) => {
      conn.query(`UPDATE ${table} SET remember_token = NULL WHERE ${primaryKey} = ?`, id, (err, result) => {
        if (err) reject(err)
        resolve(result)
      })
    })
  },


  createData: async (req) => {
    return new Promise(async (resolve, reject) => {
      req.body.password_users = await hash(req.body.password_users)
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
        const prepare = search(req, table, primaryKey, 'name_users')
        get(prepare, resolve, reject)
      } else {
        const prepare = {
          sql: `SELECT * FROM ${table} ORDER BY name_users ASC`
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
