// Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function exercise(activity){ //exercise function to take an 'activity' parameter
    return function(){ // returns an anonymous function 
    return "Today's exercise: " + activity; //when called returns "Today's exercise:" followed by activity
    }
}

var run = exercise('running'); // Supposed to print "Today's exercise: running"
console.log(run()); // supposed to print "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // supposed to print "Today's exercise: swimming"