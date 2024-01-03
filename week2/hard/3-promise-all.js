/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        // creating a delay
        setTimeout(() => {
            // resolved after delay
            resolve('First promise resolved!')
        },t*1000);
    });
}

function wait2(t) {
    return new Promise((resolve) => {
        // creating a delay
        setTimeout(() => {
            // resolved after delay
            resolve('second promise resolved!')
        },t*1000);
    });
}

function wait3(t) {
    return new Promise((resolve) => {
        // creating a delay
        setTimeout(() => {
            // resolved after delay
            resolve('third promise resolved!');
        },t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    // .all() is a method that takes an array of promises and returns a single promise. 
    //This new promise is fulfilled with an array of the resolved values from the input promises, 
    // in the same order as the promises in the input array. 
    // If any of the input promises is rejected, the returned promise is immediately rejected 
    // with the reason of the first rejected promise.
    const p1 = wait1(t1);
    const p2 = wait2(t2);
    const p3 = wait3(t3);

    return Promise.all([p1,p2,p3]).then(() => {
        const endTime = Date.now();
        return endTime - startTime;
        
    })
    // Promise.all() is used to return the array of all the promises
}

module.exports = calculateTime;
