const express = require('express');
const app= express();
const port=3000;

//dummy middleware....

app.use((req,res,next)=>{
  console.log("first middleware.." , req.path , req.method)
  next();
})

app.use((req,res,next)=>{
  console.log("2nd middleware.." ,req.path ,req.method);
  next();
})
app.use("/contact-page",(req,res,next)=>{
  console.log("3rd middleware..");
  res.send(`
    <form method="POST" action="/contact-page">
      <input type="text" name="name" placeholder="Your name" />
      <button type="submit">Submit</button>
    </form>
  `)
})

app.get('/' ,(req,res)=> {
  res.send('hello world');
})



app.listen(port , ()=>{
  console.log('listening.......: http://localhost:3000')
})