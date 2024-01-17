// npm init -y; npm install express, "type": "module"
// using postman to send requests

import express from 'express';
// import bodyParser from 'body-parser';
const app = express();
const port = 3000;
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
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
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

// User can replace a kidney, makes all kidneys healthy
app.put("/", (req, res) => {
    if(users[0].kidneys.length) {
        if(atleast1UnhealthyKidneyChecker()) {
            for (let i = 0; i < users[0].kidneys.length; i++) {
                users[0].kidneys[i].healthy = true; 
            }
        } else {
            res.status(411).json({ msg: "All kidneys are healthy!" });
        }
        res.json({ "msg": "All kidneys fixed!" });
    } else {
        res.status(411).json({msg: "There are no kidneys inside you!"})
    }
});

// Remove unhealthy kidneys
app.delete("/", (req, res) => {
    // atleast one unhealthy kidney should be there
    if (atleast1UnhealthyKidneyChecker()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({ healthy: true });
            }
        }
        users[0].kidneys = newKidneys;
        res.json({ msg: "Deleted unhealthy kidneys successfully!" });
    } else {
        res.status(411).json({ msg: "You have no bad kidneys!" });
    }
});

function atleast1UnhealthyKidneyChecker() {
    let atleastOneUnHealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnHealthyKidney = true;
            break;
        }
    }
    return atleastOneUnHealthyKidney;
}
app.listen(port);
