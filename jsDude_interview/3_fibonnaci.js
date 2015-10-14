
/* Iterative Solution */

// var fibonnaci = function(n){
//   var sequence = [0, 1]
//   if(n === 0 || n === 1){
//     return sequence[n];
//   }
//   for(var i = 2; i <= n; i++){
//     sequence[i] = sequence[i - 1] + sequence [i - 2];
//   }
//   return sequence[n];
// };

/* Recursive solution */

var fibonnaci = function(n){
  if(n === 0 || n === 1){
    return n;
  };
  console.log('recursive');
  return fibonnaci(n - 1) + fibonnaci (n - 2);
}

console.log(fibonnaci(6));

//Given a value n, find the nth Fibonnaci number
//Fibonnaci is where each number in a sequence is the sum of the two previous numbers in the sequence.
//Example
// [0, 1, 1, 2, 3, 5, ....]

//Edge cases are the first, n = 0, and second, n = 1 because they do not have two numbers to result in as it's sum


