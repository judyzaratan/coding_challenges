var letterChanges = function(str) {

  // code goes here 
  var resultString = "";
  var character = "";
  for(var i = 0; i < str.length; i++){
    var characterCharCode = str.charCodeAt(i);
    console.log(characterCharCode);
    if(characterCharCode >= 97 && characterCharCode <= 122){
      if(characterCharCode === 122){
        characterCharCode = 96;
      }

      character = String.fromCharCode(characterCharCode + 1);
    } else {

      character = str.charAt(i);
    }

    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
      character = character.toUpperCase();
    }

    resultString += character;

  }
  return resultString;
};

console.log(letterChanges('hello*3'));
//Refactor with RegEx