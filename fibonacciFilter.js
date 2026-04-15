// Richard Pham INFO 300 Program #2: Fibonacci Filter
var readLineSync = require('readline-sync'); 

var n = readLineSync.questionInt("Enter how many Fibonacci numbers to generate: ");
var fibonacci = [];
var oddFibonacci = [];

if (n <= 0) {
    console.log("retry with a valid number");
} else {

    for (var i = 0; i < n; i++) {
        if (i == 0) {
            fibonacci.push(0);
        } else if (i == 1) {
            fibonacci.push(1);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }

    for (var j = 0; j < fibonacci.length; j++) {
        if (fibonacci[j] % 2 != 0) {
            oddFibonacci.push(fibonacci[j]);
        }
    }

    console.log("Full sequence: [" + fibonacci.join(", ") + "]");
    console.log("Odd Fibonacci numbers: [" + oddFibonacci.join(", ") + "]");
}