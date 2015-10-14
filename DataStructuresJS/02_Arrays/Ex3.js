//3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. 
//Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.


function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.average = average;
  this.weekAverage = weekAverage;
}

function add(week, temp) {
  if (this.dataStore[week] === undefined){
    this.dataStore[week] = [];
  }
    this.dataStore[week].push(temp);
}

function weekAverage(week){
  return this.dataStore[week].reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  })/this.dataStore[week].length;
}
function average() {
  var total = 0;
  for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
  }
  return total / this.dataStore.length;
}

var thisWeek = new weekTemps();
thisWeek.add(1, 52);
thisWeek.add(2, 55);
thisWeek.add(3, 61);
thisWeek.add(4, 65);
thisWeek.add(1, 55);
thisWeek.add(2, 50);
thisWeek.add(3, 52);
thisWeek.add(4, 49);
console.log(thisWeek.average()); // displays 54.875
console.log(thisWeek.weekAverage(4));