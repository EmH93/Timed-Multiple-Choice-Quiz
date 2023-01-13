//When startbutton is clicked, the start button and intro text will be hidden.
//When start is clicked, the timer will begin.
//When start is clicked, the first question will show up.
//The users final score should be the remaining seconds in the timer when the questions are done.
//The user can insert their initials into the input field and submit to save their score - validate feedback for no input as well as successful input.
//users timer score an initials will save to localStorage

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
        insertQuestion(questionOne, answersOne);
    })

//Timer countdown.
    function countdownTimer(){
        var timeLeft = 60;
        var timeInterval = setInterval(function () {
            timeLeft--;
            timerValue.textContent = timeLeft;
//TODO later insert if else for end of timer

        }, 1000);
    }