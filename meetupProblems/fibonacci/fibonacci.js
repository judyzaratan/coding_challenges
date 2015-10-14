/* 
  Fibonacci
  Fibonacci

  Implement an iterative version of the Fibonacci sequence 
  which take an integer n as input and returns the nth Fibonacci number. 
  Implement a recursive version of the Fibonacci sequence 
  which take an integer n as input and returns the nth Fibonacci number. 
  In mathematics, the Fibonacci numbers or Fibonacci series or Fibonacci sequence are the numbers in the 
  following integer sequence:[1][2] 0,1,1,2,3,5,8,13,21,34,55,89,144 
  By definition, the first two numbers in the Fibonacci sequence are 0 and 1, 
  and each subsequent number is the sum of the previous two. 
  In mathematical terms, the sequence Fn of Fibonacci numbers is defined by 
  the recurrence relation F_n = F_{n-1} + F_{n-2}
*/

var fibonacci_recursive = function(n) {
    if (n === 1) {
        return 1;
    }

    if (n === 0) {
        return 0;
    }

    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
};

console.log(fibonacci_recursive(3));


var fibonacci_iterative = function(n){
  var prev1 = 0;
  var prev2 = 1;
  var sum = prev1 + prev2;
  for(var i = 2; i <= n; i++){
    sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum;
  }
  return sum;
};


console.log(fibonacci_iterative(6));
