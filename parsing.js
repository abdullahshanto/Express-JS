//body parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  console.log(req.body);
  res.send(`Name: ${name}, Email: ${email}`);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
