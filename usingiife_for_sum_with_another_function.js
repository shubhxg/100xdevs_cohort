// this arrow function takes an array of numbers and returns the sum of all the numbers in the array

const arr = (numArray) => {
  let result = 0;
  for(let i = 0; i < numArray.length; i++) {
    result = result + numArray[i];
  }
  return result;
}

// this IIFE takes an array of numbers, calls another function, and returns the result of that function
const addNums = ((...values) => { 
    const result = arr(values);
  return result;
  }) (4, 6, 3, 8, 1);

console.log(addNums);
