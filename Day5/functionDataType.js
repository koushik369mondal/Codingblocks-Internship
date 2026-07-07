

let a = function hello(){
    console.log("Hello");
}
a();

// arrow function
let b = () => {
    console.log("Guys");
}
b();

let c = (a,b) => {
    return a + b; // explicit return
}
console.log(c(10,20));

let d = (a,b) => (a+b) // implicit return
console.log(d(15,10));

let e = (a,b) => a+b // single line return
console.log(e(20,20));
