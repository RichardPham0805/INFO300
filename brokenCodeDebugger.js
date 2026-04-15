// Richard Pham INFO 300 Program #4: Broken Code Debugger
const readlineSync = require('readline-sync');

let start = readlineSync.questionInt("Enter start number: "); // Fixed: used questionInt so the user input is stored as a number
let end = readlineSync.questionInt("Enter end number: "); // Fixed: used questionInt so the user input is stored as a number

let count = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 == 0) { // Fixed: used modulo operator to check even numbers
        count += 1; // Fixed: changed =+ to += 
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);