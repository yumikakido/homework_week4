// 
//  Presented with another question
// Time is subtracted from the clock, when answered incorrectly
// Game is over when all questions are answered or the timer reaches 0
// Save initials and score when game is over 

// Game starts(= timer starts, questions are displayed and start_msg disappears) once start_btn has been clicked
const startButton = document.getElementById("start_btn")
startButton.addEventListener("click", startGame)

function startGame() {
  countdown()
  hideMessage()
  displayQuestions()
}

// Timer starts 
var timerEl = document.getElementById("timer_sec");
var mainEl = document.getElementById("box_content");
var startMsgEl = document.getElementById("start_msg");

function countdown() {
  var timeLeft = 60;

var timeInterval = setInterval(function () {
  if (timeLeft === 0 ){
    clearInterval(timeInterval)  
  }
  // Output timeLeft to the console to double check 
  console.log(timeLeft)

  // Show how many seconds left
  if (timeLeft > 0) {
    timerEl.textContent = `${timeLeft}`
  }

  //
  else {
    timerEl.textContent = ""
  }
  timeLeft = timeLeft - 1
}, 1000);
}

//  Display question
function displayQuestions() {
      mainEl.style.display = "block";
    }

// Hide start_msg
function hideMessage() {
  startMsgEl.style.display = "none";
}





