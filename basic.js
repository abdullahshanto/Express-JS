const express = require('express');
const app= express();
const port=3000;

//dummy middleware....

app.use((req,res,next)=>{
  console.log("first middleware..")
  next();
})

app.use((req,res,next)=>{
  console.log("2nd middleware..");
  next();
})

app.get('/' ,(req,res)=> {
  res.send('hello world');
})



app.listen(port , ()=>{
  console.log('listening.......: http://localhost:3000')
})