// npm init -y; npm install express body-parser, "type": "module"
// using postman to send requests

import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

// mini database of user with kidneys
const users = [{
    userName: "john",
    age: 22,
    kidneys: []
}]

// middleware to intercept body data
app.use(bodyParser.json());

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

// User can replace a kidney, makes it healthy
// app.put('/', (req, res) => {

// })

// Remove a kidney 
app.delete('/', (req, res) => {
    if(!users[0].kidneys.length) {
        res.json({msg: "No kidneys available!"});
    } else {
        users[0].kidneys.pop();
        res.json({ msg: "Deleted a kidney successfully!" });
    }
})

app.listen(port);
