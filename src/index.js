let fname = 'Ryan';
let lname = 'D';
let age = prompt("Guess  Ryan's age ..");


// using template string
let result = `Hello ${fname} ${lname}, you are ${age} years old.`;
alert(result);

// var is function scoped, which means a variable declared inside a function can be accessed only within that function.
// On the other hand, let is block scoped, which means a variable declared in3 - var vside a block {} (like if, for loops) can only be accessed within that block.