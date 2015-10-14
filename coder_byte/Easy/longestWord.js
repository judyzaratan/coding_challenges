var Longestword = function(sen) {
  var max = "";
  var tempString = "";

  var checkString = function() {
    if (max.length < tempString.length) {
      max = tempString;
    }
  };

  var empty = function() {
    tempString = "";
  };

  // code goes here
  for (var i = 0; i <= sen.length; i++) {

    if (sen.charAt(i) === " ") {
      checkString();
      empty();
    }

    if (sen.charAt(i) !== " ") {
      if (sen.charAt(i) === "&" || sen.charAt(i) === "!") {
        checkString();
        empty();
      } else {
        tempString += sen.charAt(i);
      }
    }
    checkString();
  }

  return max;
};
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
console.log('here is the result', LongestWord("fun&!! time"));



//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
//If there are two or more words that are the same length, return the first word from the string with that length.
//Ignore punctuation and assume sen will not be empty.

//Two pass iteration
// O(n + m) n = length of sentence, m = length of array
//Uses native function split
function longestWord(sen){
  var longestWord = "";
  var wordArray = sen.split(" ");
  console.log(wordArray);
  for(var i = 0; i < wordArray.length; i++){
    if(wordArray[i].length > longestWord.length ){
      console.log(true);
      longestWord = wordArray[i];
    }
  }
  return longestWord;
}

console.log(longestWord("hello my name is judy"));



//One pass iteration
// O(n) -> n length of sen

function longestWord(sen){
  var currentWord = "";
  var longestWord = "";
  for(var i = 0; i < sen.length; i++){
    if(sen.substr(i, 1) === " "){
      if(longestWord.length < currentWord.length){
        longestWord  = currentWord;
      }
      currentWord = "";
    } else {
      currentWord += sen.substr(i, 1);
    }
  }
  return longestWord;
}

console.log(longestWord("hello my name is judy"));
