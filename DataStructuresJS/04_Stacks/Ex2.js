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

var postFix = function(expression) {
  var postFixString = '';
  var operandStack = new Stack();
  var operatorStack = new Stack();
  var operatorHash = {
    '*': 1,
    '/': 2,
    '+': 3,
    '-': 4
  };
  for (var i = 0; i < expression.length; i++) {
    var value = parseInt(expression[i], 10);
    if (!isNaN(value)) {
      console.log('value', value);
      postFixString += expression[i];
    }
    if(isNaN(value)){
      while(operatorHash[operatorStack.peek()] <= operatorHash[expression[i]]){
        postFixString += operatorStack.pop();
        console.log('it is an operator less than current', postFixString, operatorHash[operatorStack.peek()], operatorHash[expression[i]]);
      }
      operatorStack.push(expression[i]);
    }
    console.log(postFixString);
  }

  while(operatorStack.length() !== 0){
    postFixString += operatorStack.pop();
  }
  return postFixString;

};

console.log(postFix('3+4*5/6'));
// '5'  operandStack 1 

// 5 1 3 * - 4 3 * -