let result = fibonacciGenerator(20);

console.log(result);

function fibonacciGenerator(n) {

    // edge case
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0,1];
    } else {
       let array = [0,1];

        // looping from third position that is i = 2 and then pushing sum of values at i-1 and i-2
        // This is Dynamic approach called Tabulation or Bottom up approach
        for(var i = 2; i < n; i++) {
            array.push(array[i-1] + array[i-2]);
        }
        return array;
    }

}
