// requirements: 
// npm init -y, 
// npm install express

const express = require('express');
const { stringify } = require('qs');
const app = express();
let port = 3000;

// starts the server and makes it listen on the port 
app.listen(port, ()=>{
    console.log(`server started at ${port}`);
});

// response sent to the user at route '/' which is root
app.get('/', function(req, res) {

      // returns an object, info such as browser and os of the client
      const data = req.rawHeaders;

      // this line checks if the data sent by the browser has word Windows in it or not.
      // first turned the object into a string then checked if it has Windows word in it.
    const isWindowsUser = JSON.stringify(data).includes("Windows");
    console.log(isWindowsUser ? "Yes" : "No");
})
