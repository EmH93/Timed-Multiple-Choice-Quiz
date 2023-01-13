//This sheet will store the questions, all answers and the correct answers.
//When a question comes onto the screen, the question will be pushed into the h2 question in the index.
//Anwers will be put into a ol with individual li per answer, each asnwer should be a button in the choices div.
//For each question, an incorrect choice will remove ten seconds from the timer, and provide incorrect! feedback, and move to the next question.
//For each question, a correct choice will provide correct! feedback move to the next question.

//Variables from index.html:
var questionText = document.querySelector("#question-title");
var answersDiv = document.querySelector("#choices");


//Questions
//Question 1 (correct: Object-Oriented):
var questionOne = "Fill in the blank: Javascript is an _________ language.";
var answersOne = ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'];

//Question 2 (correct: alerts):
var questionTwo = "Which option below is not a commonly used Javascript data type?";
var answersTwo = ['Booleans', 'Numbers', 'Alerts', 'Strings'];

//Question 3 (correct: Number):
var questionThree = "What will be the output of the following code snippet: print(typeof(Nan));";
var answersThree = ['Object', 'Number', 'String', 'Undefined'];

//Question 4 (correct: Quotation marks):
var questionFour = "Strings must be surrounded by which of the following options?";
var answersFour = ['Quotation marks', 'Curly brackets', 'Square brackets', 'Parentheses'];

//Question 5 (correct: stringify())
var questionFive = "Which of these functions can be used to serialise an object into a JSON string in Javascript?"
var answersFive = ['parse()', 'convert()', 'push()', 'stringify()'];