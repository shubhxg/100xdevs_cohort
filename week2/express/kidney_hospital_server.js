// npm init -y; npm install express, "type": "module"
// using postman to send requests

import express from 'express';
// import bodyParser from 'body-parser';
const app = express();
const port = 3000;

// mini database of user with kidneys
const users = [{
    userName: "john",
    age: 22,
    kidneys: []
}]

// middleware to intercept body data
// app.use(bodyParser.json());
app.use(express.json())

// return how many kidneys user have and their health
app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfJohnKidneys = johnKidneys.length;

    // finding only healthy kidneys
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < johnKidneys.length; i++) {
        if(johnKidneys[i].healthy) {
            ++numberOfHealthyKidneys;
        } 
    }    

    // number of unhealthy kidneys
    const numberOfUnhealthyKidneys = numberOfJohnKidneys - numberOfHealthyKidneys;

    // sending response in form of json
    res.json({
        numberOfJohnKidneys, 
        numberOfHealthyKidneys, 
        numberOfUnhealthyKidneys
    })
})

// User can add a new kidney
app.post('/', (req, res) => {
    // getting the kidneys from the request body
    const isHealthyKidney = req.body.isHealthyKidney;

    // adding kidney to the user data
    users[0].kidneys.push({
        healthy: isHealthyKidney
    })

    res.json({ msg: "New Kidney Added Successfully!" });
})

// User can replace a kidney, makes kidneys healthy
app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({"msg": "All kidneys fixed!"});
});


// Remove unhealthy kidneys
app.delete("/", (req, res) => {
  if (!users[0].kidneys.length) {
    res.json({ msg: "No kidneys available!" });
  } else {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({ healthy: true });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "Deleted unhealthy kidneys successfully!" });
  }
});

app.listen(port);
