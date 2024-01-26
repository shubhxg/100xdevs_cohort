// importing sillyname module from npm
import { generateName } from 'sillyname'

const arrOfNames = [];
const numberOfNames = 10;

function randomGenerate(n) {
    for(let i = 0; i < n; i++) {
        const randomName = generateName();
        arrOfNames.push(randomName);
    } 
    return randomName;
}

console.log(randomGenerate(numberOfNames));
