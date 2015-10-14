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



var test = new Deque();
console.log('queue');
test.enqueue('hello');
test.enqueue('there');
console.log(test.dequeue());

console.log('Front Add');
test.frontAdd('Hello');
console.log(test.data);
console.log(test.pop());
console.log(test.data);
