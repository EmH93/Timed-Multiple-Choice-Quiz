
//Variables from index.html needed for logic:
    var startButton = document.querySelector("#start");
    var timerValue = document.querySelector("#time");
    var timerDiv = document.querySelector("#timerDiv");
    var startScreen = document.querySelector("#start-screen");
    var questionsScreen = document.querySelector("#questions");
    var endScreen = document.querySelector("#end-screen");
    var endLose = document.querySelector("#end-screenLose")
    var finalScoreValue = document.querySelector("#final-score");
    var userInitials = document.querySelector("#initials");
    var submitScore = document.querySelector("#submit");
    var questionFeedback = document.querySelector("#feedback")

    var timeLeft = 60;

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
        var timeInterval = setInterval(function () {
        if (timeLeft > 0){
            timeLeft--;
            timerValue.textContent = timeLeft;
        }
            if(timeLeft === 0){
                questionsScreen.setAttribute("class", "hide");
                questionFeedback.setAttribute("class", "hide");
                endLose.setAttribute("class", "show");
                timerDiv.setAttribute("class", "hide");
            }
        }, 1000);
    }

// Function that brings up score page of quiz.
    function finalPage(){
        questionsScreen.setAttribute("class", "hide");
        questionFeedback.setAttribute("class", "hide");
        endScreen.setAttribute("class", "show");
        localStorage.setItem("user score", timeLeft);
        finalScoreValue.textContent = localStorage.getItem("user score");
        timerDiv.setAttribute("class", "hide");

        submitScore.addEventListener("click", function(event){
            event.preventDefault();

            var userInitials = document.querySelector("#initials").value;

            if (userInitials === "") {
                alert("Error, initials cannot be blank.");
            } else {
                alert("Success, score registered successfully");
            }
        localStorage.setItem("initials", userInitials);
        })
    };