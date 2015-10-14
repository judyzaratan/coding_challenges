//1. Create a grades object that stores a set of student grades in an object. 
//Provide a function for adding a grade and a function for displaying the student’s grade average.


var Grades = function(grade){
  this.grade = [];
  this.addGrade = function(grade){
    this.grade.push(grade);
  };
  this.average = function(){
    var average = 0;
    var sum = 0;
    if(!this.grade){
      return 0;
    }
    sum = this.grade.reduce(function(previousValue, currentValue, index, array){
      return previousValue + currentValue ;
    });
    return sum/this.grade.length;
  };
};

var judy = new Grades();
judy.addGrade(20);
judy.addGrade(20);
judy.addGrade(20);

console.log(judy.average());

