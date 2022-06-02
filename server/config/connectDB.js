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

module.exports = mysqlDB.promise()
