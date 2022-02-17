const express = require('express');
const res = require('express/lib/response');
const userRoutes = require('./Routes/userRoutes')
const app = express();
//const mssql = require('mssql');
const dataCon = require('./Config/db')
const port = 4500;

//use json
app.use(express.json())

app.use('/', userRoutes)
app.listen(port, () => {
    console.log("App listenning to port  " + port)
})