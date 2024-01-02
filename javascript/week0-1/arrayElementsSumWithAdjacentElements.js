let arr = [1,2,3,4,5];

const sum = (arr) => {

  for (let i in arr) {
  
    // converting i into number because its a string
    i = parseInt(i, 10);
    
    if(i < arr.length-1) {
      arr[i] = arr[i] + arr[i+1];
    }
  }
  return arr;
}

// calling function
console.log(sum(arr));
