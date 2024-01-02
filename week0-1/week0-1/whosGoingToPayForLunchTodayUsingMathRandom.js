let friendsList = ["shubh", "aman", "sumit", "aryan", "prashant", "shreyas", "zaid", "nilesh"];

let numberOfPeople = friendsList.length;

whosPaying(friendsList);

/*Math.floor(Math.random()*8) is to create a random number between 1-7

how? well Math.random returns a number between 0-0.99 then we multiply it with the required number+1 so 7+1*/

function whosPaying(friendsList) {
    console.log(`${friendsList[Math.floor(Math.random() * numberOfPeople)]} is going to buy lunch today`);
}
