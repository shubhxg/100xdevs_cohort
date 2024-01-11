// npm init; npm install express body-parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let port = 3000;

// converts body into json
app.use(bodyParser.json());

app.post('/', function(req, res) {
  console.log(req.body);
  res.send('Message received successfully!');
})

app.listen(port, ()=>{
  console.log(`server started at port ${port}`);
});
