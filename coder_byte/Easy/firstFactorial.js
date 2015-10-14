//Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it
//(ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.


function firstFactorial(num){
  var factorial = 1;
  for(var i = 1; i <= num; i++){
    factorial *= i;
  }
  return factorial;
}

console.log(firstFactorial(5));
console.log(5 * 4 * 3 * 2 * 1);
