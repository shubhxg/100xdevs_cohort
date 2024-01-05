// // ## File cleaner
// // Read a file, remove all the extra spaces and write it back to the same file.

// // For example, if the file input was
// // hello     world    my    name   is       raman

// break down the problem into steps 👇
// 1. Read the file
// 2. Store data
// 3. Trim it to remove space from start and end
// 4. Replace spaces from middle of sentenses with regular expression -> replace(/\s+/g, ' ');
// 5. Write to the file.

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, 'utf-8', (_err, data) => {
    let dataFromFile;
    try {
        dataFromFile = data;
        dataFromFile = dataFromFile.trim()
        // removes the useless characters from file and then replaces that space with 1 space only
        let cleanData = dataFromFile.replace(/[.,?@\/#!$%\^&\*;:{}=\-_`~()\s]/g, ' ').replace(/\s+/g, ' ');

        fs.writeFile(filePath, cleanData, (_err) => {
            try {
                console.log('Successfully Written to the file!')
            } catch (err) {
                console.log(err);
            }
        })
    } catch(err) {
        console.log(err);
    }
})
