// Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(totalSlices){// function takes total slice parameter
return function(numPeople) { // returns anynoymous function, takes 'numPeople parameter
    return "Each person gets " + (totalSlices / numPeople).toFixed(2) + " slices of pizza";
}
// anonymous function called it will calculate number of Slices of pizza per person
}//Dividng 'totalSlices by 'numPeople'
// formats result two decimal places using 'toFixed ' method

var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2)); //prints " each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); // prints "each person gets 2.67 slices of pizza"