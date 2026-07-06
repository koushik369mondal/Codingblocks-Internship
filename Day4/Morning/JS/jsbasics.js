var x = 1;
console.log(x);

x = "Hello, Guys";
console.log(x);

i = 20;

while (i <= 30) {
    console.log(i);
    i++;
}

// all numbers from 1 to 100
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// even numbers
for (var i = 2; i <= 100; i += 2) {
    console.log(i);
}

// odd numbers
for (var i = 1; i <= 100; i += 2) {
    console.log(i);
}

// even numbers
function printEvenNumbers() {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers();
