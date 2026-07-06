console.log(x);
let x = 10; // error: Cannot access 'x' before initialization
var x = 10; // undefined
console.log(x);

//hoisting
var x;
console.log(x);
x = 10;
console.log(x);