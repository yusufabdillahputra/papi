require('dotenv/config')
const mysql = require('mysql')

conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

conn.connect((err) => {
  if (err)
    console.log(err)
  else
    console.log('Database connected')
})

module.exports = conn
