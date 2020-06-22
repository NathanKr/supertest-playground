console.log('app is loading');

const express = require('express');
const app = express();

// --- handle json in body
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({msg : 'hello world'})
})

app.post('/',(req,res)=>{
    // do something with the body
    console.log(req.body);
    
    res.status(201).send(req.body);
})

module.exports = app;