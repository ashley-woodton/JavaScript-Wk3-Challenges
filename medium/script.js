
// MEDIUM: Write a function that would allow you to do this:
// // var sharePizza = cutPizzaSlices(8); 
// console.log(sharePizza(2));
// // prints "Each person gets 4.00 slices of pizza" 
// console.log(sharePizza(3));
// // prints "Each person gets 2.67 slices of pizza"

let cutPizzaSlices = pizza => {
    return pizza;
}

var slices = prompt("How many slices of pizza?");

let sharePizza = num => console.log(`Each person gets ${(cutPizzaSlices(slices) / num).toFixed(2)} slices of pizza`)

sharePizza(2);
sharePizza(3);
