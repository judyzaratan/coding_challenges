/* Remove duplicates

Design an algorithm and write code to remove the duplicate characters in 
a string without using any additional buffer. NOTE: One or two additional variables are fine. 
An extra copy of the array is not. Write the test cases for this method.
Write a method to decide if two strings are anagrams or not.

*/


var removeDuplicates = function(str){
  var outputStr = '';
  for(var i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) === i){
      outputStr += str[i];
    }
  }
  return outputStr;
};


console.log(removeDuplicates('aaabbbasdfasdfdsc'));

