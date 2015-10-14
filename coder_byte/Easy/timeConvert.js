var timeConvert = function (num) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;

  if (minutes < 60 && minutes !== 0 && hours > 0){
    return hours + ":" + minutes;

  }

  if( minutes === 0){
    return hours;
  }

  if(hours === 0){
    return minutes;
  }
  // code goes here           
};
                       

console.log(timeConvert(126));