var letterCapitalize = function(str){
  var result = "";
  var character = "";

  for(var i = 0; i < str.length; i++){
    character = str.charAt(i);
    if(str.charAt(i-1) === " " || i === 0){
      result += character.toUpperCase();
    } else{
      
      result += character;
    }
  }
  
  return result;
};

console.log(letterCapitalize('hello world'));