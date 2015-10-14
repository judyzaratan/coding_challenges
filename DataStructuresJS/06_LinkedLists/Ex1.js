var LList = function(){
  this.head = null;
  this.tail = null;


  this.node = function(value){
    return {
      value: value,
      next: null
    };
  };
};


