const path = require('path');
const express= require('express');
const Hostrouter= express.Router();

const rootDir=require('../utils/pathUtils')

Hostrouter.get("/add-home" , (req,res,next)=>{
  res.sendFile(path.join(rootDir, 'views' , 'add-home.html'));
})

Hostrouter.post("/add-home" ,(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','homeAdded.html'))
})

module.exports = Hostrouter;



