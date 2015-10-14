// Question: How would you remove duplicate members from an array?

var removeDuplicates = function(arr){
  var itemsSeen = {};
  var array = [];

  for(var i = 0; i < arr.length; i++){
    if(!itemsSeen[arr[i]]){
      itemsSeen[arr[i]] = 1;
      array.push(arr[i]);
    }
  }
  return array;
}
//Time complexity: O(n) linear
//Space complexity: O(1) constant..
//Would space complexity depend if it was an array vs a single variable?

var removeDuplicates = function(arr){
  var itemsSeen = {};

  return arr.filter(function(item, index, array){
    return !(arr.indexOf(item) < index);
  });
};

console.log(removeDuplicates([1, 1, 2, 1, 3, 4, 5, 6, 34, 5, 6, 3,4, 5, 6, 3,4, 5, 6, 3,4, 5, 6, 3]));