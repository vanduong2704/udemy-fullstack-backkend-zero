require('dotenv').config();
const mysql = require('mysql2');
const { connect } = require('../routes/web');

// create the connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, /// ddefault 3306
    user: process.env.DB_USER,/// efault: empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});



module.exports = connection;