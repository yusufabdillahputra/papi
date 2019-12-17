require('dotenv/config')
const pool = require('../config/mysql')

module.exports = {
  pool,
  query: (prepare, resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) throw reject(err)
      connection.query({
        sql : prepare.sql,
        values : prepare.values
      }, function (error, result, fields) {
        connection.release();
        if (error) reject(error)
        resolve(result)
      });
      connection.destroy()
    });
  }
}
