//Shuffle

//Without using a shuffle or sort write your own shuffle method for an array. 
//The method will take an array and returns a new array with all of the elements in a random order. 
//One important property of a good shuffle method is that every permutation is equally likely.


//Using array.splice causes a shift in elements
//grab length of array
//Math.random * lenght of input array
//while input array has elements
  //Math.random * lenght
  //pop from input
  //push to output array

// var shuffle = function(array){
//   var shuffledArray = [];
//   var arrayCopy = array.slice(0);
//   while(arrayCopy.length){
//     shuffledArray.push(arrayCopy.splice(Math.floor(Math.random() * arrayCopy.length), 1)[0]);
//   }
//   return shuffledArray;
// };
//Time complexity: O(n^2)  


var shuffle = function(array){
  var n = array.length;
  var temp;
  var i;

  while(n){
    i = Math.floor(Math.random()* n--);
    temp = array[n];
    array[n] = array[i];
    array[i] = temp;
  }
  return array;
};

//Time complexity: O(n) in place...
//Removes use of splice



var arrayIN = [1, 2, 3, 4, 5];
console.log(shuffle(arrayIN));
console.log(arrayIN);