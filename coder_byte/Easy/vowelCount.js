var vowelCount = function(str){
  var character = "";
  var count = 0;
  var vowelObj = {
    a: true,
    A: true,
    e: true,
    E: true,
    i: true,
    I: true,
    o: true,
    O: true,
    u: true,
    U: true
  };


  for(var i = 0; i < str.length; i++){
    character = str.charAt(i);

    if(vowelObj[character]){
      count += 1;
    }
  }
  return count;
};

console.log(vowelCount("aaaeeebziiiooouu"));


//Reg ex
var vowelCount = function(str){

  var vowels = str.match(/[aeiou]/g);
  return vowels.length;
};