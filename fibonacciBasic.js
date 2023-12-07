let result = fibonacciGenerator(14);

console.log(result);

function fibonacciGenerator(n) {

    if (n === 1) {
        
        return [0];
        
    } else if (n === 2) {
        
        return [0,1];
        
    } else {
        const array = [0,1];
        for (let i = 0; i < n-2; i++) {
            array.push(array[i] + array[i+1]);
        }
        return array;
    }
}
