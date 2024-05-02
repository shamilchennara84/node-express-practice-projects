const express = require('express');
const app = express();

const data = require("./data/sample.json");

app.get('/',(req,res)=>{
    console.log(data);
    res.json(data)
})

app.listen(5000,()=>{
    console.log('port is 5000');
})