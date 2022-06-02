const mysql = require("mysql2");

require('dotenv').config();

const mysqlDB = mysql.createPool({
    multipleStatements: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    // connectionLimit: 5,
})

console.log(process.env.DB_HOST)

module.exports = mysqlDB.promise()
