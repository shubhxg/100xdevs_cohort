const addNums = ((...values) => { 

    let result = 0;
    
    for(let i = 0; i < values.length; i++) {
      result += values[i];
    }
    return result;
  }) (4, 6, 3, 8, 1);

console.log(addNums);
