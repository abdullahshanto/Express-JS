const express = require('express')



const userRouter = require('./user_router');
const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(userRouter);

//app.use for all page and path wherever you clicked
//this is only show you this msg
// app.use((req,res,next)=>{
//    console.log(req.url , req.method);
//    res.send(`wlcome bro
//     <a href="/add-home">add home </a>
//     `)
// })

// app.get("/",(req,res,next)=>{
//   console.log(req.body)
//   res.send(`<h1>welcome to home page</h1>
//     <a href="contact-page">contact-page</a>
//     `)
// })

app.get("/contact-page",(req,res,next)=>{
  console.log(req.body)
  res.send(`<h1>Contact page</h1>
    <form method="POST" action="/contact-page">
      <input type="text" name="name" placeholder="Your name" />
      <button type="submit">Submit</button>
    </form>
    `)
})

app.post("/contact-page", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Thanks ${req.body.name}</h1><a href="/">Home</a>`);
})


app.listen(port , ()=>{
  console.log(`http://localhost:${port}`);
})