require('dotenv').config();
const express = require('express'); //commonjs
//import express from 'express';
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const mysql = require('mysql2');


const app = express(); // ap express
const port = process.env.PORT || 8888;//port
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//config template enginee
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);


// test connecctionnn

// simple query

connection.query(
    'select * from Users u',
    function (err, results, fields) {
        console.log(">>>>> results=",results); // results contains rows returned by server
    }
);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
