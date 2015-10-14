/* Factorial

Write a recursive and iterative solution for a finding the factorial of a number. 
If you don't remember, the factorial of a non-negative integer n, 
denoted n! is the product of all positive integers less than . 
For example, 5! = 5 * 4 * 3 * 2 * 1
*/

var factorial_iterative = function(n) {
    var factorial = 1;
    for (n; n > 1; n--) {
        factorial *= n;
    }
    return factorial;
};

console.log(factorial_iterative(6));
console.log(6 * 5 * 4 * 3 * 2 * 1);



var factorial_recursive = function(n){
  if(n === 1 ){
    return 1;
  }
  return n * factorial_recursive(n-1);
};

console.log(factorial_recursive(6));

