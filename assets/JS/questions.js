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
    var questionOne = "1. Fill in the blank: Javascript is an _________ language.";
        var qOneOne = 'Object-Oriented';
        var qOneTwo = 'Object-Based';
        var qOneThree = 'Procedural';
        var qOneFour = 'None of the above';
        var correctOne = 'Object-Oriented';

    //Question 2
    var questionTwo = "2. Which option below is not a commonly used Javascript data type?";
        var qTwoOne = 'Booleans';
        var qTwoTwo = 'Numbers';
        var qTwoThree = 'Alerts';
        var qTwoFour = 'Strings';
        var correctTwo = 'Alerts';

    //Question 3
    var questionThree = "3. What will be the output of the following code snippet: print(typeof(Nan));";
        var qThreeOne = 'Object';
        var qThreeTwo = 'Number';
        var qThreeThree = 'String';
        var qThreeFour = 'Undefined';
        var correctThree = 'Number';

    //Question 4
    var questionFour = "4. Strings must be surrounded by which of the following options?";
        var qFourOne = 'Quotation marks';
        var qFourTwo = 'Curly brackets';
        var qFourThree = 'Square brackets';
        var qFourFour = 'Parentheses';
        var correctFour = 'Quotation marks';

    //Question 5
    var questionFive = "5. Which of these functions can be used to serialise an object into a JSON string in Javascript?"
        var qFiveOne = 'parse()';
        var qFiveTwo = 'convert()';
        var qFiveThree = 'push()';
        var qFiveFour = 'stringify()';
        var correctFive = 'stringify()';


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

//Question 1 function:
    //Push question to screen function:
    function insertQuestionOne(question, one, two, three, four, correct){
        questionText.textContent = question;    
        convertAnswers(one, two, three, four, correct);
    //Event listeners for the buttons:    
        liELOne.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
            });
        liELTwo.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                timeLeft -= 10;
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
        });
        liELThree.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                timeLeft -= 10;
                return insertQuestionTwo(questionTwo, qTwoOne, qTwoTwo, qTwoThree, qTwoFour, correctTwo);
        });
        liELFour.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                timeLeft -= 10;
                return insertQuestionThree(questionThree, qThreeOne, qThreeTwo, qThreeThree, qThreeFour, correctThree);
        });   
    };

//Question 2 function:
    //Push question to screen function:
    function insertQuestionTwo(question, one, two, three, four, correct){
        questionText.textContent = question;    
        convertAnswers(one, two, three, four, correct);
    //Event listeners for the buttons:    
        liELOne.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionThree(questionThree, qThreeOne, qThreeTwo, qThreeThree, qThreeFour, correctThree);
        });
        liELTwo.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionThree(questionThree, qThreeOne, qThreeTwo, qThreeThree, qThreeFour, correctThree);
        });
        liELThree.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                timeLeft += 10;
                return insertQuestionThree(questionThree, qThreeOne, qThreeTwo, qThreeThree, qThreeFour, correctThree); 
        });
        liELFour.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionThree(questionThree, qThreeOne, qThreeTwo, qThreeThree, qThreeFour, correctThree);
        });
        
    };

//Question 3 function:
    //Push question to screen function:
    function insertQuestionThree(question, one, two, three, four, correct){
        questionText.textContent = question;    
        convertAnswers(one, two, three, four, correct);
    //Event listeners for the buttons:    
        liELOne.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionFour(questionFour, qFourOne, qFourTwo, qFourThree, qFourFour, correctFour);
        });
        liELTwo.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                timeLeft += 10;
                return insertQuestionFour(questionFour, qFourOne, qFourTwo, qFourThree, qFourFour, correctFour);
        });
        liELThree.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionFour(questionFour, qFourOne, qFourTwo, qFourThree, qFourFour, correctFour);
        });
        liELFour.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionFour(questionFour, qFourOne, qFourTwo, qFourThree, qFourFour, correctFour);
        });
    };

//Question 4 function:
    //Push question to screen function:
    function insertQuestionFour(question, one, two, three, four, correct){
        questionText.textContent = question;    
        convertAnswers(one, two, three, four, correct);
    //Event listeners for the buttons:    
        liELOne.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                return insertQuestionFive(questionFive, qFiveOne, qFiveTwo, qFiveThree, qFiveFour, correctFour);
        });
        liELTwo.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionFive(questionFive, qFiveOne, qFiveTwo, qFiveThree, qFiveFour, correctFour);
        });
        liELThree.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionFive(questionFive, qFiveOne, qFiveTwo, qFiveThree, qFiveFour, correctFour);
        });
        liELFour.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return insertQuestionFive(questionFive, qFiveOne, qFiveTwo, qFiveThree, qFiveFour, correctFour);
        });
    };

//Question 5 function:
    //Push question to screen function:
    function insertQuestionFive(question, one, two, three, four, correct){
        questionText.textContent = question;    
        convertAnswers(one, two, three, four, correct);
    //Event listeners for the buttons:    
        liELOne.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return finalPage();
        });
        liELTwo.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return finalPage();
        });
        liELThree.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "That's incorrect!"
                return finalPage();
        });
        liELFour.addEventListener("click", function(){
                questionFeedback.setAttribute("class", "feedback show");
                questionFeedback.textContent = "Well done, that's correct!"
                timeLeft += 10;
                return finalPage();
        }); 
    };


