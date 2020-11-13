// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running" var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

let exercise = options => console.log(`Today's exercise: ${options}`)

exercise("running");
exercise("swimming");