'use strict';
const express = require('express');
const app = express();

app.get('/,',(req,res) => {
    res.send('Hello World! from Node.Js tt');
});
app.listen('8080','0.0.0.0',() =>{
    console.log('listening to port 8k');
});
