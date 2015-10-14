var ABCheck = function(str){
  for(var i = 0; i < str.length; i++){
    if(str.charAt(i) === 'a' || str.charAt(i) === 'A'){
      if(str.charAt(i + 3) === 'b' || str.charAt(i + 3) === 'B'){
        return true;
      }
    }
  }
  return false;
};


//More simple function
var ABCheck = function(str){
  //Uses regex expression and test
  return ('/a...b/g').test(str);
};
   