var highscoreListDiv = document.querySelector("#highscores");
var clearScoresButton = document.querySelector("#clear");
var score = localStorage.getItem("user score");
var initials = localStorage.getItem("initials");
var onScreenScore = document.createElement("li");

//calling score function when page loads
addScore();

//Function checks for previously saved score in local storage, if no score saved, alert tells user to take quiz
function addScore(){
    if(!score){
        return alert("No score saved, take the quiz to enter your high score");
    } else {
        highscoreListDiv.appendChild(onScreenScore);
        onScreenScore.textContent = initials + ": " + score;
    }
};


//Event listener for clear button, removes high score in local storage and hides the empty ordered line div on screen. 
clearScoresButton.addEventListener("click", function(event){
    localStorage.setItem("user score", "");
    localStorage.setItem("initials", "");
    onScreenScore.textContent = "";
        if (onScreenScore.textContent === ""){
            highscoreListDiv.setAttribute("class", "hide");
        } else {
            highscoreListDiv.setAttribute("class", "show");
        }
});