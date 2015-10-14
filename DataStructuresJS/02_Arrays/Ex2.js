//2. Store a set of words in an array and display the contents both forward and backward.

var sentence = ['a', 'cat', 'was', 'here'];

for(var i = 0; i < sentence.length; i++){
  console.log(sentence[i]);
}

for(i = sentence.length - 1; i >=0; i--){
  console.log(sentence[i]);
}

console.log(sentence.join(' '));
console.log(sentence.reverse().join(" "));