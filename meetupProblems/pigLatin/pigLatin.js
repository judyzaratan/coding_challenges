var pigLatin = function(str) {
  var lower = str.toLowerCase();
  var VOWELS = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true
  };

  if (VOWELS[lower[0]]) {
    return lower + 'yay';
  }
  return str.substr(1) + str.substr(0, 1) + 'ay';
};

//Time complexity: 
//Best 
//W

console.log(pigLatin('banana'));

//determine if first character is a vowel or constant
//if vowel
//do not touch first character
//append 'yay' at the end of input string
//if constonant
//remove first character
//append first charact to the end of the end of the input string
//append 'ay' at the input string