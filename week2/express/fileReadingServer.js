// npm init -y; npm install express;

const express = require('express');
const fs = require('fs')
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/files', (req, res) => {
  // folder path fix
  const filesFolderPath = path.join(__dirname, './files/');

  // reading folder 
  fs.readdir(filesFolderPath, (err, files) => {
    if (err) {
      res.status(500).json({ "error": "can not retrieve files" });
    }
    // sending data to the user
    res.json(files);
  })
});

app.get('/files/:filename', (req, res) => {
  // folder path fix
  let filePath = path.join(__dirname, './files/', req.params.filename);
  
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.status(404).json({ "error": "File not found" });
    }
    res.json(data);
  })
});

// for all other route params 
app.all('*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port.`);
})
