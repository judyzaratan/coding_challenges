var Word = function(){
  this.letterStore = [];
  this.addLetter = addLetter;
  this.displayWord = displayWord;
};


function displayWord(){
  return this.letterStore.join('');
}

function addLetter(letter){
  this.letterStore.push(letter);
}



var cat = new Word();
cat.addLetter('c');
cat.addLetter('a');
cat.addLetter('t');


console.log(cat.displayWord());
