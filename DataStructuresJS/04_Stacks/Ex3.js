var Stack = function() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  // this.clear = clear;
  this.length = length;
};

var push = function(element) {
  this.dataStore[this.top++] = element;
};

var pop = function() {
  --this.top;
  return this.dataStore.pop();
};

var peek = function() {
  return this.dataStore[this.top - 1];
};

var length = function() {
  return this.top;
};


var pez = function(pieces){
  var pezStack = new Stack();
  var output = "";
  for(var i = 0; i < pieces.length; i++){
    if(pieces[i] !== 'Y'){
      pezStack.push(pieces[i]);
    }
  }
  while(pezStack.length() !== 0){
    output = pezStack.pop() + output;
  }
  return output;
}

console.log(pez('RRWYWYWYWYWY'));
