const mysql = require("mysql2");
require('dotenv').config();

const mysqlDB = mysql.createPool({
    multipleStatements: true,
    host: process.env.DB_HOST_PROD,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_NAME_PROD,
    connectionLimit: 5
})

module.exports = mysqlDB.promise()
