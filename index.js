function isPalindrome(word) {
  // Write your algorithm here
  // create a variable to store the reversed word
  let reversedWord = "";
  // loop through the word from the end to the beginning
  for (let i = word.length - 1; i >= 0; i--) {
    // add each letter to the reversed word
    reversedWord += word[i];
  }
  // compare the reversed word to the original word
  return reversedWord === word;

  // return true if they are the same, false if they are different
    

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
