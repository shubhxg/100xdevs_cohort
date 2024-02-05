// task 1 = create new endpoint for /signup ✅
// task 2 = make it so users can signup and a new token is generated for them ✅
// task 3 = make the data save into mongo db ✅
// task 4 = make signin possible with token ✅
// task 5 = if user doesnt exist return error ✅
import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { z } from "zod";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;

mongoose
  // Mongo connection string in .env file
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Could not connect to MongoDB");
  });

// schema
const usersSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

// model based on the schema
const Users = mongoose.model("users", usersSchema);

// zod schema
const schema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string().endsWith("@gmail.com") || z.string().endsWith(".com"),
    password: z.string().min(8),
  }),
});

// middleware for input validation
const validateUserInput = (schema) => (req, res, next) => {
  try {
    schema.parse({ body: req.body });
    next();
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

app.use(express.json(), validateUserInput(schema));

app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (await userExists(email)) {
    return res.status(403).json({
      msg: "Account already exists, please sign in!",
    });
  }
  // create a new user
  createUser(username, email, password);
  const token = jwt.sign({ email }, jwtPass);
  // sending token to the user
  return res.status(200).json({
    message: "Signup successful!",
    token,
  });
});

app.post("/login", async (req, res) => {
  const { username, email, password } = req.body;

  if (!(await userExists(email))) {
    return res.status(403).json({
      message: "Wrong username or password!",
    });
  } else {
    // token creation
    const token = jwt.sign({ email }, jwtPass);
    // sending token to the user
    return res.status(200).json({
      message: "LoggedIn successfully!",
      token,
    });
  }
});

app.get("/users", (req, res) => {
  // getting the token from the user
  const token = req.headers.authorization;
  try {
    // verification of user
    const decoded = jwt.verify(token, jwtPass);
    const username = decoded.email;
    return res.status(200).json({
      msg: "Welcome back " + req.body.username + "!",
    });
  } catch (err) {
    return res.status(403).json({
      msg: "User not found or Invalid token",
    });
  }
});

// function to find if the user exists
async function userExists(email) {
  const user = await Users.findOne({ email: email});
  return user !== null;
}

function createUser(username, email, password) {
  const user = new Users({
    username: username,
    email: email,
    password: password,
  });
  // save the user
  user.save().then(() => console.log("Added User!"));
}

// global error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at 3000`);
});
