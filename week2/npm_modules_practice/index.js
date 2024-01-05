// importing sillyname module from npm
import { generateName } from 'sillyname'

const arrOfNames = [];
const numberOfNames = 10;

// generates an array of random names from sillyname module using genName();
for(let i = 0; i < numberOfNames; i++) {
    const randomName = generateName();
    arrOfNames.push(randomName);
}

console.log(arrOfNames);
