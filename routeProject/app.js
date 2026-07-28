const path = require('path');
const express = require('express');
const app=express();

const Hostrouter = require('./routes/hostRouter');
const rootDir=require('./utils/pathUtils');

app.use("/host",Hostrouter)

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})

app.listen(3000,()=>{
  console.log(`http://localhost:3000`)
})