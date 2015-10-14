// sillyString.js
function sillycase(silly) {
  //your code
  var result = "";
  var mid = silly.length / 2;
  if (mid % 2 !== 0) { 
    mid = Math.ceil(mid);
   }

  for(var i = 0; i < mid; i++){
    result += silly[i].toLowerCase();
  }
  for(var j = mid ; j < silly.length; j++){
    result += silly[j].toUpperCase();
  }
  return result;
}

function sillycase(silly) {
  var c = Math.round(silly.length / 2);
  return silly.substr(0, c).toLowerCase() + silly.substr(c).toUpperCase();
}