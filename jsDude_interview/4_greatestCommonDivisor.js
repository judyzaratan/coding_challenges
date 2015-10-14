//What is the greatest common divisor of two numbers?

//Pseudocode
// iterate up to the two values and see if a divisor would divide evenly

// Incrementing divisor
// Goes thru too many loops....
function greatestCommonDivisor(a, b) {
    var divisor = 2;
    var greatestDivisor = 1;
    if (a < 2 || b < 2)
        return 1;

    while (a >= divisor && b >= divisor) {
        if (a % divisor === 0 && b % divisor === 0) {
            greatestDivisor = divisor;
        }
        console.log(divisor);
        divisor++;
    }

    return greatestDivisor;
}



//Divisor algorithm
//Assume b > a

//divisor = a
//dividend = b
//remainder = b % a

// if the remainder is not 0
//swap variables in algorighm and repeat 

//if it is no common divisor
//return 1


// function greatestCommonDivisor(a, b){
//   var dividend = b;
//   var divisor = a;
//   var remainder = dividend % divisor;

//   while(remainder !== 0 && remainder !== dividend){
//     dividend = divisor;
//     divisor = remainder;
//     remainder = dividend % divisor;
//     quotient = dividend / divisor;
//   }
//   return divisor;

// }



function greatestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    }
    return greatestCommonDivisor(b, a % b);
};
console.log(greatestCommonDivisor(69, 169));