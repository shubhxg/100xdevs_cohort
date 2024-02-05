const http = require('http');
const PORT = 3000;

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html');
  response.end("<h1>Hello world!</h1>");
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on ' + (process.env.PORT || 3000));
});
