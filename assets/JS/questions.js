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
    var liELOne = document.createElement("button");
    var liELTwo = document.createElement("button");
    var liELThree = document.createElement("button");
    var liELFour = document.createElement("button");
    answersOrderedList.appendChild(liELOne);
    answersOrderedList.appendChild(liELTwo);
    answersOrderedList.appendChild(liELThree);
    answersOrderedList.appendChild(liELFour);

//Questions
    //Question 1
    var questionOne = "Fill in the blank: Javascript is an _________ language.";
        var qOneOne = 'Object-Oriented';
        var qOneTwo = 'Object-Based';
        var qOneThree = 'Procedural';
        var qOneFour = 'None of the above';
        var correctOne = 'Object-Oriented';

    //Question 2
    var questionTwo = "Which option below is not a commonly used Javascript data type?";
        var qTwoOne = 'Booleans';
        var qTwoTwo = 'Numbers';
        var qTwoThree = 'Alerts';
        var qTwoFour = 'Strings';
        var correctTwo = 'Alerts';

    //Question 3
    var questionThree = "What will be the output of the following code snippet: print(typeof(Nan));";
        var qThreeOne = 'Object';
        var qThreeTwo = 'Number';
        var qThreeThree = 'String';
        var qThreeFour = 'Undefined';
        var correctThree = 'Number';

    //Question 4
    var questionFour = "Strings must be surrounded by which of the following options?";
        var qFourOne = 'Quotation marks';
        var qFourTwo = 'Curly brackets';
        var qFourThree = 'Square brackets';
        var qFourFour = 'Parentheses';
        var correctFour = 'Quotation marks';

    //Question 5
    var questionFive = "Which of these functions can be used to serialise an object into a JSON string in Javascript?"
        var qFiveOne = 'parse()';
        var qFiveTwo = 'convert()';
        var qFiveThree = 'push()';
        var qFiveFour = 'stringify()';
        var correctFive = 'stringify()';

//Clear inner html of question once answered
    function clearQuestion(){
        answersOrderedList.textContent = "";
        questionText.textContent = "";
    };

//Function to push question answers into answer choice lines    
    function convertAnswers(one, two, three, four, correct){
        var correctAns = correct;
        liELOne.textContent = one;
        liELTwo.textContent = two;
        liELThree.textContent = three;
        liELFour.textContent = four;
        liELOne.setAttribute("id", "answerOption");
        liELTwo.setAttribute("id", "answerOption");
        liELThree.setAttribute("id", "answerOption");
        liELFour.setAttribute("id", "answerOption");
    };

//Push question to screen function:
    function insertQuestionOne(question, one, two, three, four, correct){
        questionText.textContent = question;    
        convertAnswers(one, two, three, four, correct);
    //Event listeners for the buttons:    
        liELOne.addEventListener("click", function(){
            if(liELOne.innerHTML === correct){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            } else {
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            }
        });
        liELTwo.addEventListener("click", function(){
            if(liELTwo.innerHTML === correct){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            } else {
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            }
        });
        liELThree.addEventListener("click", function(){
            if(liELThree.innerHTML === correct){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            } else {
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            }
        });
        liELFour.addEventListener("click", function(){
            if(liELFour.innerHTML === correct){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            } else {
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            }
        });
        
    };

//Push question to screen function:
function insertQuestionTwo(question, one, two, three, four, correct){
    questionText.textContent = question;    
    convertAnswers(one, two, three, four, correct);
//Event listeners for the buttons:    
    liELOne.addEventListener("click", function(){
        if(liELOne.innerHTML === correct){
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "Well done, that's correct!"
            //setTimeout(clearQuestion, 1000);
        } else {
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "That's incorrect!"
           // setTimeout(clearQuestion, 1000);
        }
    });
    liELTwo.addEventListener("click", function(){
        if(liELTwo.innerHTML === correct){
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "Well done, that's correct!"
           // setTimeout(clearQuestion, 1000);
        } else {
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "That's incorrect!"
            //setTimeout(clearQuestion, 1000);
        }
    });
    liELThree.addEventListener("click", function(){
        if(liELThree.innerHTML === correct){
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "Well done, that's correct!"
            //setTimeout(clearQuestion, 1000);
        } else {
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "That's incorrect!"
            //setTimeout(clearQuestion, 1000);
        }
    });
    liELFour.addEventListener("click", function(){
        if(liELFour.innerHTML === correct){
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "Well done, that's correct!"
            //setTimeout(clearQuestion, 1000);
        } else {
            questionFeedback.setAttribute("class", "feedback show");
            questionFeedback.textContent = "That's incorrect!"
           // setTimeout(clearQuestion, 1000);
        }
    });
    
};



