// var runLength = function(str){
//   var workingChar = "";
//   var workingSum = 0;
//   var resultStr = "";

//   for(var i = 0; i <=  str.length; i++){
//     if(workingChar === str.charAt(i)){
//       workingSum++;
//     }
//     if( workingChar !== "" && workingChar !== str.charAt(i)) {
//       resultStr += workingSum + workingChar;
//       workingSum = 1;
//     }
//     workingChar = str.charAt(i);

//   }
//   return resultStr;


// };




var runLength = function(str){
  var count = 0;
  var result = [];
  for(var i = 0; i < str.length; i++){
    count++;
    if(str[i] !== str[i+1]){
      result.push(count);
      result.push(str[i+1]);
      count = 0;
    }
  }
  return result.join("");
};
console.log(runLength('aabbcde'));