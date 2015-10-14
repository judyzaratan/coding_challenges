// Smash Words
function smash (words) {
    "use strict";
    var sentence = "";
    
    //edge case
    if (words.length === 0){
      return "";
    }
    
    //create sentence
    for(var i = 0; i < words.length; i++){
      sentence += words[i];
      
      if(i === words.length - 1){
        return sentence;
      } else {
        sentence += " ";
      }
    }
}