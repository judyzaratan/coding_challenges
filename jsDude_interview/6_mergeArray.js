var mergeArray = function(list1, list2){
  var i = 0;
  var k = 0;
  var results = [];
  while (list1[i] !== undefined  || list2[k] !== undefined){
    console.log(k, i);
    if(list1[i] > list2[k]){
      results.push(list2[k]);
      k = k + 1;
    }
    if(list1[i] < list2[k]){
      results.push(list1[i]);
      i = i + 1;
    }
  }
  while(k < list2.length){
    console.log('it got here');
    results.push(list2[k]);
    k = k + 1;
  }
  while(i < list1.length){
        console.log('it got here2');
    results.push(list1[i]);
    i = i + 1;
  }
  return results;
};



//check which one of the loops has the greater 
