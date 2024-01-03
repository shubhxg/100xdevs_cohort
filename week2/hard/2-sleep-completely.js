/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    // creating a promise using constructor
    return new Promise(function(resolve,reject) {
        // storing start time which can be used to measure time passed
        const startTime = Date.now();
        // Now to make the JS thread busy, it has to perform a heavy operation.
        // The operation will be checking if the elapsed time is less than the given milliseconds.
        // So, this loop will continuously run until the specified milliseconds have passed.
        // During this time, the thread is occupied and is unable to perform other tasks.
        while (Date.now() - startTime !== milliseconds) {
            // blocking the thread
        }
        resolve();
    });
}

module.exports = sleep;
