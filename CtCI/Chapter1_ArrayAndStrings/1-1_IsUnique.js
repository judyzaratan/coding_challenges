// var isUnique = function(str){
//   for(var i = 0; i < str.length; i++){
//     if(str.indexOf(str[i]) < i){
//       return false;
//     }
//   }
//   return true;
// };

//Using a hash
var isUnique = function(str){
  var chars = {};
  for(var i = 0; i < str.length; i++){
    if(!chars[str[i]]){
      chars[str[i]] = true;
    } else {
      return true;
    }
    
  }
  return false;
};
console.log(isUnique('heoll'));