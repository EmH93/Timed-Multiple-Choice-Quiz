//When startbutton is clicked, the start button and intro text will be hidden.
//When start is clicked, the timer will begin.
//When start is clicked, the first question will show up.
//The users final score should be the remaining seconds in the timer when the questions are done.
//The user can insert their initials into the input field and submit to save their score - validate feedback for no input as well as successful input.
//users timer score anf initials will save to localStorage

//Variables from index.html needed for logic:
    var startButton = document.querySelector("#start");
    var timerValue = document.querySelector("#time");
    var startScreen = document.querySelector("#start-screen");
    var questionsScreen = document.querySelector("#questions");
    var endScreen = document.querySelector("#end-screen");
    var finalScoreValue = document.querySelector("#final-score");
    var userInitials = document.querySelector("#initials");
    var submitScore = document.querySelector("#submit");
    var questionFeedback = document.querySelector("#feedback")



//Start button click event.
    startButton.addEventListener("click", function(event){
        event.preventDefault();
        countdownTimer();
        startScreen.setAttribute("class", "hide");
        questionsScreen.setAttribute("class", "show");
//Below code testing successful question insert.
insertQuestionOne(questionOne, qOneOne, qOneTwo, qOneThree, qOneFour, correctOne);
    });

//Timer countdown.
    function countdownTimer(){
        var timeLeft = 60;
        var timeInterval = setInterval(function () {
        if (timeLeft > 0){
            timeLeft--;
            timerValue.textContent = timeLeft;
        }
            if(timeLeft === 0){
                finalPage();
                clearInterval(timeInterval);
                localStorage.setItem("user score", timeLeft);
            }
        }, 1000);
    }


// Function that brings up score page of quiz.
    function finalPage(){
        questionsScreen.setAttribute("class", "hide");
        questionFeedback.setAttribute("class", "hide");
        endScreen.setAttribute("class", "show");
        var userScore = localStorage.getItem("user score");
        console.log(userScore);
        finalScoreValue.textContent = userScore;
    }