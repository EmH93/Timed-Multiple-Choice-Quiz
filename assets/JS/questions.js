//This sheet will store the questions, all answers and the correct answers.
//When a question comes onto the screen, the question will be pushed into the h2 question in the index.
//Anwers will be put into a ol with individual li per answer, each asnwer should be a button in the choices div.
//For each question, an incorrect choice will remove ten seconds from the timer, and provide incorrect! feedback, and move to the next question.
//For each question, a correct choice will provide correct! feedback move to the next question.

//Variables from index.html:
    var questionText = document.querySelector("#question-title");
    var answersDiv = document.querySelector("#choices");

//Ordered List for answers:
    var answersOrderedList = document.createElement("ol")
    answersDiv.appendChild(answersOrderedList);

//Questions
    //Question 1
    var questionOne = "Fill in the blank: Javascript is an _________ language.";
    var answersOne = ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'];
    var correctOne = 'Object-Oriented';

    //Question 2
    var questionTwo = "Which option below is not a commonly used Javascript data type?";
    var answersTwo = ['Booleans', 'Numbers', 'Alerts', 'Strings'];
    var correctTwo = 'Alerts';

    //Question 3
    var questionThree = "What will be the output of the following code snippet: print(typeof(Nan));";
    var answersThree = ['Object', 'Number', 'String', 'Undefined'];
    var correctThree = 'Number';

    //Question 4
    var questionFour = "Strings must be surrounded by which of the following options?";
    var answersFour = ['Quotation marks', 'Curly brackets', 'Square brackets', 'Parentheses'];
    var correctFour = 'Quotation marks';

    //Question 5
    var questionFive = "Which of these functions can be used to serialise an object into a JSON string in Javascript?"
    var answersFive = ['parse()', 'convert()', 'push()', 'stringify()'];
    var correctFive = 'stringify()';


//turn answer array into ordered list.
    function convertAnswers(answersArr){
        var answersArray = answersArr;
            for(var i = 0; i < answersArray.length; i++){
                var liEl = document.createElement("li");
                answersOrderedList.appendChild(liEl);
                liEl.textContent = answersArray[i];
            }
    }

//Push question to screen function:
    function insertQuestion(question, answers){
        questionText.textContent = question;    
        convertAnswers(answers);
    }

