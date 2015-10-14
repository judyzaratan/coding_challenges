// reverse
// Write code to reverse a C-Style String.

// abcd -> dcba

//iterate through string 
//another variable to append
//return reversed string
// var reverse = function(str){
//   var reverse = '';
//   for(var i = str.length - 1; i >= 0; i--){
//     reverse += str[i];
//   }
//   return reverse;
// };

//Time complexity: O(n)  length if iterating through n



//in place...no additional variable used?  -- cannot strings are immutable

var reverse = function(str){

  var index = str.length - 1;
  if(index < 0){
    return '';
  }
  return str[index] + reverse(str.substring(0, index));
};


// var reverse = function(arr){
//   for(var i = 0; i < Math.round(arr.length/2); i++){
//     var temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
//   }
//   return arr;
// }
console.log(reverse('cats'));