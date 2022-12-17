var questions = [
    {
        title: " A commonly used data type in Javascript is:",
        choices: ["string", "alert", "modal", "button"],
        answer: "string"
    },
    {
        title: "The === operator returns true if:",
        choices: ["If the data is equal", "If the data is not equal", "If the data is equal, and the same data type", "It never returns true"],
        answer: "If the data is equal, and the same data type"
    },
    {
        title: "A variable in Javascript can store:",
        choices: ["numbers and strings", "arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "To make a number in a variable a string instead of an integer, you would wrap it in:",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "Javascript is also known as:",
        choices: ["Java", "ECMAscript", "CSS", "Algorithm"],
        answer: "ECMAscript"
    },

];
var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 80;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});