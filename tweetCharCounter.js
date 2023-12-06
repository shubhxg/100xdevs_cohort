const CharacterLimit = 280;

let tweetCharacters = window.prompt("Type your tweet here (character limit is 280)").length;

function charCounter (CharacterLimit, tweetCharacters) {
    let remainingCharacters = CharacterLimit - tweetCharacters;
    return remainingCharacters;
}

let remainingChars = charCounter(CharacterLimit, tweetCharacters);


// can be replaced with console.log if nodejs is being used
window.alert(`You used ${tweetCharacters} characters, now are left with ${remainingChars}`)

