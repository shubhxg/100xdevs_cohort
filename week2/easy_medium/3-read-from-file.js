// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

fs.readFile(filePath, 'utf-8', function (err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

let a = 0

for(let i = 0; i < 1000000000; i++) {
     a+=2;
}

console.log(a);

// number got printed first and then hello world got printed which means that the main thread was not 
// blocked because of reading the file operation.
// when i make the for loop more expensive the number takes like 10seconds or more and then it gets printed and then 
// after the number is printed then the setTimeout console is printed, this is because during execution of for loop the async thread was busy and then
// after it got completed it was put into the callback queue, once the thread became idle then the async call was put back into the callstack.

// ------------------------------ now lets do this same thing synchronously

const fs2 = require('fs');
const path2 = require('path');

const filePath2 = path2.join(__dirname, 'test.txt');

const data = fs2.readFileSync(filePath2, 'utf-8');
console.log(data, 'data was read first');

let a1 = 0;

for(let i = 0; i < 1000000000; i++) {
     a1+=2;
}

console.log(a1);

// here since we are using readFileSync, the file was read first and then the data is printed
// and then the for loop runs, this means its blocking the main thread of the code.
// So now i get it why we write async code.
