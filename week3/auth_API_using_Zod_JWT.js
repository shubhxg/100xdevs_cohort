// Assignment: API which has 2 endpoints: /login /users
// body should contain username and password to /login 
// sends back dummy data to the user

const express = require('express');
const jwt = require('jsonwebtoken');
const { z } = require('zod');

const app = express();
const port = 3000;
const jwtPass = '12345';

// dummy data
const USERSDATA = [
  {
    username: "silentknight",
    password: "god123",
    fullname: "aman trivedi",
  },
  {
    username: "johndoe",
    password: "123123",
    fullname: "john doe",
  },
  {
    username: "sumitbhai123",
    password: "sumit123",
    fullname: "sumit kumar",
  },
  {
    username: "shubhsig",
    password: "shubh12",
    fullname: "shubh sharma",
  }
]

// schema for input validation
const loginInputSchema = z.object({
  body: z.object({
    username: z.string().min(6),
    password: z.string().min(6),
  }),
});

// middleware for input validation
const validateUserInput = (schema) => (req, res, next) => {
  try {
    schema.parse({ body: req.body });
    next();
  } catch (err) {
    return res.status(400).json({
      error: err
    });
  }
}

app.use(express.json(), validateUserInput(loginInputSchema));

// function to find if the user exists or not
const userexists = (username, password) => {
  return USERSDATA.find(user =>
    user.username === username &&
    user.password === password);
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (!userexists(username, password)) {
    return res.status(403).json({
      message: "Wrong username or password!"
    })
  } else {
    // token creation 
    const token = jwt.sign({ username }, jwtPass);
    // sending token to the user
    return res.status(200).json({
      message: "LoggedIn successfully!",
      token
    });
  }
})

app.get('/users', (req, res) => {
  // getting the token from the user
  const token = req.headers.authorization;
  try {
    // verification of user
    const decoded = jwt.verify(token, jwtPass);
    const username = decoded.username;

    // return list of users other than this user
    const usersList = USERSDATA.filter(user => user.username !== username);
    return res.status(200).json({
      msg: "Welcome back " + req.body.username + "!",
      usersList
    });
  } catch (err) {
    return res.status(403).json({
      msg: "User not found or Invalid token"
    });
  }
})

// global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error"
  })
})

app.listen(port);
