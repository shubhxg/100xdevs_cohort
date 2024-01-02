// reads a file and cleans all the un-wanted spaces from the sentences.
// week 2 of 100xdevs cohort assignment medium

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file.txt');

fs.readFile(filePath, 'utf-8', (_err, data) => {
    let dataFromFile;
    try {
        dataFromFile = data;
        dataFromFile = dataFromFile.trim()
        let cleanData = dataFromFile.replace(/\s+/g, ' ');

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
