const express = require('express');
var app = express();
const mysql = require('mysql');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/venuemonk');
mongoose.connection.on('connected',()=>{
    console.log('connected to mongodb..');
})
mongoose.connection.on('error',(err)=>{
    console.log('Not able to connect with mongo ',err );
})


var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'venuemonk'
})
var venue = require('./router/venuerout');
console.log('vennue',venue);
app.use('/venue',venue);
connection.connect(function(err){
    if(err){
        console.log('errrr',err)
    }else{
        console.log ('connected on 4000')
    }
})

app.listen(4000);
    