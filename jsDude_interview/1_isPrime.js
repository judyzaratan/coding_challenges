// var isPrime = function(n){
//   if(typeof n !== 'number'){
//     return 'Not a number';
//   }
//   console.log(n);
//   if(n % 2 === 0 || n === 1){
//     return false;
//   }
//   sqr = Math.sqrt(n);
//   console.log(sqr);
//   for(var i = 3; i < sqr; i+=2){
//     if(sqr % i === 0){
//       console.log(sqr, i);
//       return false;
//     }
//   }
//   return true;

// };


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

//What classifies as a prime number?
// non-divisible by any number except itself and 1

// Pseudocode
//check ot see if it is a number
//check to see if it is divisible by 2 -- then it's even
console.log(isPrime((70368760954879)));