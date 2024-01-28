// You have been given an express server which has a few endpoints
// Create a global middleware which will rate limit the requests from a user to only 5 request per second.
// If a user sends more than 5 requests in a single second, the server should block them with a 404.
// User will be sending in their user id in the header as 'user-id'.

const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

// resets the user request number after 1 second
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

// custom middleware to rate limit check
const rateLimitChecker = (req, res, next) => {
  const userId = req.headers["user-id"];
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 1;
  } else {
    if (numberOfRequestsForUser[userId] > 5) {
      res.sendStatus(404);
    } else {
      numberOfRequestsForUser[userId]++;
      next();
    }
  }
  next();
}

// using middleware globally
app.use(rateLimitChecker);

app.get("/user", function (req, res) {
  res.status(200);
});

app.post("/user", function (req, res) {
  res.status(200);
});

app.use((err, req, res, next) => {
    res.status(500).json({ msg: "Error 500" });
});
