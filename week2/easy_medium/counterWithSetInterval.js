//Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

let counter = 0;
let numberOfSecondsTillItRuns = 10;

function updateCounter(n) {
    console.log(counter);
    counter++;

    // this ensures that the setInterval stops after n seconds
    if(counter > n){
        clearInterval(intervalId);
    }
}

let intervalId = setInterval(updateCounter(numberOfSecondsTillItRuns), 1000);
