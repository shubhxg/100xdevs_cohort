const express = require( 'express' );
const os = require( 'os' );
const app = express();
const port = 3000;

const IP = function () {
  return os.networkInterfaces().eth0[0].address;
};

const time = function () {
  return new Date().toLocaleString();
};

const getMethod = (req) => {
  return req.method;
}

function customLogger(req, res, next) {
  console.log(time() + ' / ' + IP() + ' / ' + getMethod(req));
  next();
}

app.use(customLogger);

app.get( '/',  ( req, res ) => {
  res.sendStatus(200);
})

app.listen(port);
