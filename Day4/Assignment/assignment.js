// Convert cel to fahrenheit
function celsiusToFahrenheit(celcious){
    return (celcious * 9) / 5 + 32;
}
console.log(celsiusToFahrenheit(0));

// Swap two no using third variable
function swapWithThirdVariable(a, b){
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log(swapWithThirdVariable(5, 10));

// swap two no without using third no 
function swapWithoutThirdVariable(a, b){
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swapWithoutThirdVariable(5, 10));

// Calculate Simple interest
function simpleInterest(principal, rate, time){
    return (principal * rate * time) / 100;
}
console.log(simpleInterest(1000, 5, 2));

// Calculate total and average marks . you have an array of 10 size of marks 
function totalAndAverage(marks){
    let total = 0;
    for(let i=0; i<marks.length; i++){
        total += marks[i];
    }
    let average = total / marks.length;
    return { total, average };
}
console.log(totalAndAverage([85, 90, 78, 92, 88, 95, 80, 87, 91, 83]));

// find greatest among 5 no 
function greatestAmongFive(a, b, c, d, e){
    let greatest = a;
    if(b > greatest) greatest = b;
    if(c > greatest) greatest = c;
    if(d > greatest) greatest = d;
    if(e > greatest) greatest = e;
    return greatest;
}
console.log(greatestAmongFive(10, 20, 30, 40, 50));

/* calculate salary 
salary is divided into three parts HRA , DA , Basic so salary formula will be basic+ HRA + DA */
function calculateSalary(basic, hra, da){
    return basic + hra + da;
}
console.log(calculateSalary(1000, 500, 300));

// Reverse a no using while loop 
//  123 -> 321
function reverseNumber(num){
    let reversed = 0;
    while(num > 0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }
    return reversed;
}
console.log(reverseNumber(123));

// chech whether a no is pallindrome or not  121 -> true 
function isPalindrome(num){
    let reversed = reverseNumber(num);
    return num === reversed;
}
console.log(isPalindrome(121));

// Count digits in a NUMBER 
// ex-> 123 output -> 3
function countDigits(num){
    let count = 0;
    while(num > 0){
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}
console.log(countDigits(123));

    // 1.  * * * *
    //     * * * *
    //     * * * *
    //     * * * *
    function printSquarePattern(n){
        for(let i=0; i<n; i++){
            let row = '';
            for(let j=0; j<n; j++){
                row += '* ';
            }
            console.log(row);
        }
    }
    printSquarePattern(4);
    
    // 2.  *
    //     * *
    //     * * *
    //     * * * *
    function printTrianglePattern(n){
        for(let i=1; i<=n; i++){
            let row = '';
            for(let j=1; j<=i; j++){
                row += '* ';
            }
            console.log(row);
        }
    }
    printTrianglePattern(4);

    // 3.  1
    //     2 2
    //     3 3 3
    //     4 4 4 4 
    function printNumberTrianglePattern(n){
        for(let i=1; i<=n; i++){
            let row = '';
            for(let j=1; j<=i; j++){
                row += i + ' ';
            }
            console.log(row);
        }
    }
    printNumberTrianglePattern(4);

    // 4.  1
    //     2 3
    //     4 5 6 
    //     7 8 9 10
    function printNumberTrianglePattern2(n){
        let num = 1;
        for(let i=1; i<=n; i++){
            let row = '';
            for(let j=1; j<=i; j++){
                row += num + ' ';
                num++;
            }
            console.log(row);
        }
    }
    printNumberTrianglePattern2(4);


// find maximum and minimum in an array 
function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }
    return { max, min };
}
console.log(findMaxMin([1, 2, 3, 4, 5]));

// Left shift of an array 
function leftShift(arr, n){
    for(let i=0; i<n; i++){
        let first = arr.shift();
        arr.push(first);
    }
    return arr;
}
console.log(leftShift([1, 2, 3, 4, 5], 2));

// right shift of an array
function rightShift(arr, n){
    for(let i=0; i<n; i++){
        let last = arr.pop();
        arr.unshift(last);
    }
    return arr;
}
console.log(rightShift([1, 2, 3, 4, 5], 1));