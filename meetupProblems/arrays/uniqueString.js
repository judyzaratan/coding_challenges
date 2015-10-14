/* uniqueString

Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

*/


//Pseudocode
//iterate thru string
//  use charAt to see if index is present
//  return if indexOf character is present prior to 



// var uniqueString = function(str){
//   for(var i = 0; i < str.length; i++){
//     console.log(str[i]);
//     if(str.indexOf(str[i]) < i){
//       return false;
//     }
//   }
//   return true;

// };

//Time complexity: O(n^2) -- iterates through the string.  
//IndexOf then has a second loop comparing each character
//Best with no additional data structures



//Pseudocode
//iterate through string
//  check char is currently in hash
//    if no, store unique char in hash
//    if yes, break out of loop -- not unique and return




var uniqueString = function(str){
  var hash = {};
  for(var i = 0; i < str.length; i++){
    if(hash[str[i]]){
      return false;
    }
    hash[str[i]] = true;
  }
  return true;
}
console.log(uniqueString('peol'));
