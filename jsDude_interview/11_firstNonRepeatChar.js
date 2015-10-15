function firstNonRepeatChar(str){
  //iterate through string
  //create a hash that would count all characters encountered
  //assume all are lower case...conver to lower case
  //iterate through string again and check hash if value is 1
  //return first value encountered
  var hash = {};
  for(var i = 0; i < str.length; i++){

    if(hash[str.substr(i, 1)] === undefined){
      hash[str.substr(i, 1)] = 0;
    }
    hash[str.substr(i,1)] += 1;
  }

  for (var i = 0; i < str.length; i++){
    if(hash[str.substr(i,1)] === 1){
      return str.substr(i, 1);
    }
  }
  return "no non-repeating char";
}

console.log(firstNonRepeatChar("he quick brown fox jumps then quickly blow air"));
