//num parameter input
//return true if parameter is a prime
//input range will be 1 and 2^16



// check if the num is greater than 1

var primeTime = function(num){
  if (num <= 1) {
    return null;
  }

  var max = Math.sqrt(num);
  for (var i = 2; i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(primeTime(5));