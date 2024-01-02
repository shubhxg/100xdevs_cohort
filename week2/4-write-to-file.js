// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test2.txt');

const dataToWrite = "\nWritten using writeFile function!"

fs.writeFile(filePath, dataToWrite, function (err) {
    try {
        console.log('written succesfully!')
    } catch (err) {
        console.log(err);
    }
})  