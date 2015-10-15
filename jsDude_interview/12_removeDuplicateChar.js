//Remove duplicate characters from a string

function removeDuplicateCharacters(str){
  //assume all lower case and removing character completely
  //iterate through string
  //count each characters
  //put each character in a hash

  //iterate through string again
    //compose nonrepeating character string

  //return non repeating character string


  var hash = {}, output = "", i, char;

  for(i = 0; i < str.length; i++){
    char = str.substr(i, 1);
    if(hash[char] === undefined){
      hash[char] = 0;
    }
    hash[char] += 1;
  }

  for(i = 0; i < str.length; i++){
    char = str.substr(i, 1);

    if(hash[char] === 1){
      output += char;
    }
  }
  return output;
}

console.log(removeDuplicateCharacters('Learn more javascript dude'));
