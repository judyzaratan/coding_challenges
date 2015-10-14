function FirstReverse(str) {
  // code goes here
  var temp = str.split("").reverse().join("");
  return temp;
}

console.log(FirstReverse('hello'));


//Iterative
function FirstReverse1(str){
  var reverse = "";
  for(var i = str.length - 1; i >=0; i--){
    reverse += str.substr(i, 1);
  }
  return reverse;
}
//Time complexity O(n)
//Space complexity O(1)

console.log(FirstReverse('Coderbyte'));


//Recursive
function FirstReverse(str){
  var recurse = function(workingStr, reverse, count){
    console.log(count);
    if(reverse.length === str.length){
      return reverse;
    }
    return recurse(workingStr.substring(0, workingStr.length-1), reverse + workingStr[workingStr.length-1], count+1);
  };
  return recurse(str, "", 0);
}
console.log(FirstReverse("testing"));
