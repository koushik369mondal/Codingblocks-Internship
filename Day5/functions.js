// declaration of function
function helloWorld(){
    console.log("Hello Guys");
}
helloWorld();

// return type
function add(a, b){
    return a + b;
}
let c = add(1, 2);
let d = add(1, "Hello");
let e = add("Hello", 1);
let f = add(1, "2");
let g = add("2", 1);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

function add(a, b, c) {
    return a + b + c;
}
console.log(add(1,2,3));
console.log(add("1",2,3));