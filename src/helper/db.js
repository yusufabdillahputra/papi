require('dotenv/config')
const sprintf = require('sprintf-js').sprintf
const conn = require('../config/mysql')

module.exports = {
  conn,
  get: (prepare, resolve, reject) => {
    conn.query(prepare.sql, prepare.values, function (error, result) {
      if (error) reject(error)
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
  drop: (prepare, resolve, reject) => {
    conn.query(prepare.sql, prepare.values, function (error, result) {
      if (error) reject(error)
      resolve(result)
    })
  },
  search: (req, table, primaryKey, defaultFieldname) => {
    if (req.query.fn === primaryKey) {
      const value = {
        fieldvalue: req.query.fv || null,
        limit: req.query.limit || 60,
        offset: req.query.offset || 0
      }
      const property = {
        fieldname: req.query.fn || primaryKey,
        orderBy: req.query.order || primaryKey,
        sort: req.query.sort || 'ASC'
      }
      const sqlString = sprintf(`SELECT * FROM ${table} WHERE %(fieldname)s LIKE ? ORDER BY %(orderBy)s %(sort)s LIMIT ? OFFSET ?`, property)
      return {
        sql: sqlString,
        values: [
          value.fieldvalue,
          value.limit,
          value.offset
        ]
      }
    } else {
      const value = {
        fieldvalue: '%' + req.query.fv + '%' || '% %',
        limit: req.query.limit || 60,
        offset: req.query.offset || 0
      }
      const property = {
        fieldname: req.query.fn || defaultFieldname,
        orderBy: req.query.order || primaryKey,
        sort: req.query.sort || 'ASC'
      }
      const sqlString = sprintf(`SELECT * FROM ${table} WHERE %(fieldname)s LIKE ? ORDER BY %(orderBy)s %(sort)s LIMIT ? OFFSET ?`, property)
      return {
        sql: sqlString,
        values: [
          value.fieldvalue,
          value.limit,
          value.offset
        ]
      }
    }
  }
}
