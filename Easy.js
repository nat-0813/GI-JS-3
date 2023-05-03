// Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


function run(exercise){
    return exercise('running');
}

let run = exercise('running')
console.log(run);