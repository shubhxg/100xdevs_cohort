let result = fibonacciGenerate(14);

function fibonacciGenerate(n) {

    if (n === 1) {

        return [0];
        
    } else if (n === 2) {
        
        return [0,1];
        
    } else {
        const arr = [0,1];
        
        for (let i = 0; i < n-2; i++) {
            arr.push(arr[i] + arr[i+1]);
        }
        return arr;
    }
}

console.log(result);
