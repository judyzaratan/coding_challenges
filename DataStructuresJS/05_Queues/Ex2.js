var Deque = function(){
  this.data = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.pop = pop;
  this.frontAdd = frontAdd;
};

var enqueue = function(element){
  this.data.push(element);
};

var dequeue = function(){
  return this.data.shift();
};

var pop = function(){
  return this.data.pop();
};

var frontAdd = function(element){
  this.data.unshift(element);
};

var front = function(){
  return this.data[0];
};

var back = function(){
  return this.data[this.data.length - 1];
};


var isPalindrome = function(input){
  var reverse = new Deque();
  for(var i = 0; i < input.length; i++){
    reverse.enqueue(input[i]);
  }
  var output = "";
  while(reverse.data.length > 0){
    output += reverse.pop();
  }

  if(output === input){
    return true;
  }
  return false;
};

console.log(isPalindrome('olo'));