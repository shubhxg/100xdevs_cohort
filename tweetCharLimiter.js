// tweet character limiter 

let tweet = window.prompt("Write your tweet here!");

const limit = 280;

function tweetLimiter(x, limit) {

    return tweet.slice(0, limit);
}

window.alert(tweetLimiter(tweet,limit));
