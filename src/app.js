console.log('app is loading');

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send({msg : 'hello world'})
})

module.exports = app;