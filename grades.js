//Richard Pham INFO 300 Grades.js

var readLineSync = require('readline-sync'); 

var currentAverage = readLineSync.questionFloat("Enter your current average: "); 

if (currentAverage < 0 || currentAverage > 100) {
    console.log("Invalid current average.");
} else {

    var numberOfScores = readLineSync.questionInt("How many final exam scores do you want to test? ");


    for (var i = 1; i <= numberOfScores; i++) {

        var finalExam = readLineSync.questionFloat("Enter final exam score #" + i + ": ");

        if (finalExam < 0 || finalExam > 100) {
            console.log("Invalid score.");
            i--;
        } else {

            var finalAverage = (currentAverage * 0.75) + (finalExam * 0.25);

            var letterGrade = "";

            if (finalAverage > 89.5) {
                letterGrade = "A";
            } else if (finalAverage > 79.5) {
                letterGrade = "B";
            } else if (finalAverage > 69.5) {
                letterGrade = "C";
            } else if (finalAverage > 59.5) {
                letterGrade = "D";
            } else {
                letterGrade = "F";
            }

            var result = "";

            if (finalAverage > currentAverage) {
                result = "Improved";
            } else if (finalAverage < currentAverage) {
                result = "Declined";
            } else {
                result = "Stayed the same";
            }

            console.log("\nFinal Exam Score: " + finalExam);
            console.log("Final Course Average: " + finalAverage.toFixed(2));
            console.log("Letter Grade: " + letterGrade);
            console.log("Result: " + result);
        }
    }
}