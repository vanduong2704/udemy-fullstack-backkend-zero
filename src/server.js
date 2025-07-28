require('dotenv').config();
const express = require('express'); //commonjs
//import express from 'express';
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express(); // ap express
const port = process.env.PORT || 8888;//port
const hostname = process.env.HOST_NAME;

//config template enginee
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
