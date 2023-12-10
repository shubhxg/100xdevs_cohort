/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').
*/

function countVowels(str) {
  let vowelCounter = 0;
  
  str = str.toLowerCase();

  for (i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowelCounter++;
    }
  } 
  return vowelCounter;
}

module.exports = countVowels;
