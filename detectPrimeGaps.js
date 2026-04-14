// Richard Pham INFO 300 Program #1: Detect Prime Gaps 
var readLineSync = require('readline-sync'); 

var n = readLineSync.questionInt("Enter a positive number up to 1000: ");
var primes = [];

if (n <= 0 || n > 1000) {
    console.log("Invalid entry");
} else {

    for (var i = 2; i <= n; i++) {
        var isPrime = true;

        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    console.log("Primes up to " + n + ": [" + primes.join(", ") + "]");

    if (primes.length < 2) {
        console.log("The largest gap is 0, between none");
        console.log("The average gap is 0.00");
    } else {
        var largestGap = 0;
        var primeOne = 0;
        var primeTwo = 0;
        var totalGap = 0;
        var numberOfGaps = 0;

        for (var k = 0; k < primes.length - 1; k++) {
            var gap = primes[k + 1] - primes[k];
            totalGap = totalGap + gap;
            numberOfGaps++;

            if (gap > largestGap) {
                largestGap = gap;
                primeOne = primes[k];
                primeTwo = primes[k + 1];
            }
        }

        var averageGap = totalGap / numberOfGaps;

        console.log("The largest gap is " + largestGap + ", between " + primeOne + " and " + primeTwo);
        console.log("The average gap is " + averageGap.toFixed(2));
    }
}