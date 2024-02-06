const http = require('http');
const url = require('url');
const PORT = 3000;

const server = http.createServer((request, response) => {
  const pathName = request.url;
  response.setHeader('Content-Type', 'text/html');
  if(pathName === '/' || pathName === '/home') {
    response.end("<h1>Hello world!</h1>");
  } else if(pathName === '/about') {
    response.end("<h1>About me</h1>");
  } else { 
    response.writeHead(404).end("<h1>404 Not Found</h1>");
  }
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on ' + (process.env.PORT || 3000));
});
