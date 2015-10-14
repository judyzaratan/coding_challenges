
var primeFactors = function(n){
  var factors = [];
  var sqrt = Math.sqrt(n);
  for(var i = 0; i < sqrt; i++){
    if(n % i === 0){
      if(isPrime(i)){
        factors.push(i);
      }
      if(isPrime(n / i)) {
        factors.push(n/i);
      }
    }
  }
  return factors;
};
var isPrime = function(n){
  if(typeof n !== 'number'){
    return 'Not a number';
  }
  if(n === 1){
    return false;
  }
  var upperLimit = Math.sqrt(n);
  for(var i = 2; i <= upperLimit; i++){
    if(n % i === 0){
      return false;
    }
  }
  return true;

};
console.log(1203980203984/75248762749)
console.log(primeFactors(294));
//Pseudocode
// Example
// input = 6
// [2, 3]

//check up to square root
  //iterate from 0 to square root
  //check if modulus n === 0
    //check n prime or n/divisor prime
    //if so, then push into array
