/* 1. A stack can be used to ensure that an arithmetic expression has balanced parentheses. 
Write a function that takes an arithmetic expression as an argument and returns the postion 
in the expression where a parenthesis is missing. An example of an arithmetic expression 
with unbalanced parentheses is 2.3 + 23 / 12 + (3.14159 * .24.
*/



function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  //this.peek = peek;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  --this.top;
  return this.dataStore.pop();
}


function balancedParens(expression){

  var parensStack = new Stack();


  for(var i = 0; i < expression.length; i++){
    if(expression[i] === ')'){
      parensStack.pop();
    }
    if(expression[i] === '('){
      parensStack.push(')');
    }

    console.log(parensStack.dataStore, parensStack.top);
  }

  if(parensStack.dataStore.length === 0){
    return -1;
  }
  return i+1;
}

// console.log(('(5 + 2) + ( 5 + 3 )  * (2 - 4)').length);
var result = balancedParens('(5 + 2) + ( 5 + 3  * (2 - 4)');
console.log(result);