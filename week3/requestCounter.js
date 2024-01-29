const request = require("supertest");
const assert = require("assert");
const express = require("express");

const app = express();
let requestCount = 0;

app.use((req, res, next) => {
  ++requestCount;
  next();
});

app.get("/user", (req, res) => {
  res.status(200).json({ name: "john" });
});

app.post("/user", (req, res) => {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/requestCount", (req, res) => {
  res.status(200).json({ requestCount });
});

app.listen(3000);
