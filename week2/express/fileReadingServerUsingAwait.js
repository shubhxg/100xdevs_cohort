/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  The expected API endpoints are defined below,

  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */

const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/files', async (req, res) => {
  // folder path fix
  const filesFolderPath = path.join(__dirname, './files/');

  // reading folder 
  try {
      const files = await fs.readdir(filesFolderPath);
      res.json(files);
    } catch (err) {
    res.status(500).json({"error": "can not retrieve files"});
  }
});

app.get('/files/:filename', async (req, res) => {

  // folder path fix
  let filePath = path.join(__dirname, './files/', req.params.filename);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    res.json(data);
  } catch (err) {
    res.status(404).json({"error": "File not found"});
  }
});

app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port.`);
})

module.exports = app;
