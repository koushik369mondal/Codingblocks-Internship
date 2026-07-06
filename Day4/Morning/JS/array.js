var a = [1, 2, 3, 4, 5];
console.log(a);

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// array is hetrogeneous
var b = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(b);

// for of loop
for(var e of b) {
    console.log(e);
}