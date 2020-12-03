const mysql = require("mysql");
require("dotenv").config();

/**
 * Koneksi database ke mysql bedasarkan env file
 */
const pool = mysql.createConnection({
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

module.exports = pool;