// String.prototype.toJadenCase = function () {
//   //...
//   var capitalize = false;
//   var result = "";
//   for(var i = 0; i < this.length; i++){
//     if(i === 0 || this[i - 1] === " " ){
//      result += this[i].toUpperCase();
//     } else{
//      result += this[i];
//     }
//   }
//   return result;
// };

String.prototype.toJadenCase = function() {
  return this.split(" ").map(function(element){
    return element.charAt(0).toUpperCase() + element.slice(1);
  }).join(" ");
};