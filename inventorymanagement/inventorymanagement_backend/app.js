const express =require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
const productmanagement=require('./service/productmanagement');
const app=express();
app.use(bodyParser.json())
app.use(cors())

const port =process.env.PORT || 3000;

app.use('/api',productmanagement);

app.listen(port,()=>{
    console.log("connected to port "+ port);
})