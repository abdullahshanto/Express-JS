const express = require('express')
const userRouter= express.Router();

userRouter.get("/",(req,res,next)=>{
  console.log(req.body)
  res.send(`<h1>welcome to home page</h1>
    <a href="contact-page">contact-page</a>
    `)
})

module.exports = userRouter;