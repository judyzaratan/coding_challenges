/* Anagrams

An anagram is a word formed by rearranging the letters of another word, e.g.,
iceman is an anagram of cinema. We're going to write a method called anagrams_for 
that takes as its input a word and an array of words, representing a dictionary, 
and returns an array consisting of all the anagrams of the input word. 
anagrams_for should return an empty array ([]) if no anagrams are found in the dictionary. 
You don't have to worry about the order of the returned Array.
 */

var anagrams_for = function(word, dictionary){
  var sortedWord = word.split('').sort().join();
  var anagramList = [];
  dictionary.forEach(function(element, index, array){
    if(element.split('').sort().join() === sortedWord){
      anagramList.push(dictionary[index]);
    }
  });
  return anagramList;
};

var test = anagrams_for('cat', ['cat', 'tac','atc', 'mat', 'bat']);
console.log(test);