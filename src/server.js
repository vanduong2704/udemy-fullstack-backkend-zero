require('dotenv').config();
const express = require('express'); //commonjs
//import express from 'express';
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const mysql = require('mysql2');


const app = express(); // ap express
const port = process.env.PORT || 8888;//port
const hostname = process.env.HOST_NAME;

//config template enginee
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);


// test connecctionnn
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3308, /// ddefault 3306
    user: 'root',/// efault: empty
    password: '123456',
    database: 'hoidanit'
});
// simple query

connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>>> results=",results); // results contains rows returned by server
        console.log(">>>>> fields=",fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
