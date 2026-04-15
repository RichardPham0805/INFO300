// Richard Pham INFO 300 Program #3: Letter Frequency
var readLineSync = require('readline-sync'); 

var text = readLineSync.question("Enter a string: ");
var lowerText = text.toLowerCase();
var letters = "abcdefghijklmnopqrstuvwxyz";
var counts = [];
var firstRepeatedLetter = "";

for (var i = 0; i < 26; i++) {
    counts.push(0);
}

for (var j = 0; j < lowerText.length; j++) {
    var ch = lowerText[j];
    var index = letters.indexOf(ch);

    if (index != -1) {
        counts[index] = counts[index] + 1;
    }
}

for (var k = 0; k < lowerText.length; k++) {
    var currentChar = lowerText[k];
    var currentIndex = letters.indexOf(currentChar);

    if (currentIndex != -1 && counts[currentIndex] > 1) {
        firstRepeatedLetter = currentChar;
        break;
    }
}

console.log("Letter frequencies:");

for (var m = 0; m < counts.length; m++) {
    if (counts[m] > 0) {
        console.log(letters[m] + ": " + counts[m]);
    }
}

if (firstRepeatedLetter == "") {
    console.log("First repeated letter: none");
} else {
    console.log("First repeated letter: " + firstRepeatedLetter);
}