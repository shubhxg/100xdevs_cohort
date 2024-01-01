// swap 2 variables using third one

let a = 5, b = 10;

console.log(`before swapping a = ${a} and b = ${b}`);

let result = swap(a,b);

swapprint(result);

// function that receives result array and prints it
function swapprint (result) {
  console.log(`after swapping a = ${result[0]} and b = ${result[1]}`);
}

//function to swap 2 variables 
function swap (a,b) {
  let temp;
  temp = a;
  a = b;
  b = temp;
  return [a,b];
}
