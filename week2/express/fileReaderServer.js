/**
The expected API endpoints are defined below,
1. GET /files - Returns a list of files present in `./files/` directory
Response: 200 OK with an array of file names in JSON format.
2. GET /file/:filename - Returns content of given file by name
    Description: Use the filename from the request path parameter to read the file from `./files/` directory
    Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
    Example: GET http://localhost:3000/file/example.txt
- For any other route not defined in the server return 404
*/
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = 3000;
const router = express.Router();

router.get('/files', (req, res) => {
    try {
        const folderPath = path.join(__dirname, "./files/");
        const files = await fs.readdir(folderPath);
        res.json(files);
    } catch (err) {
        res.status(500).json({ "error": "Failed to retrieve data" });
    }
});

router.get('/file/:filename', function (req, res) {
    try {
        const fileName = req.params.filename;
        const filePath = path.join(__dirname, './files/', fileName);
        const data = await fs.readFile(filePath, 'utf8')
        res.send(data);
    } catch (err) {
        res.status(404).send('File not found');
    }
});

router.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

app.listen(PORT);

module.exports = app;
