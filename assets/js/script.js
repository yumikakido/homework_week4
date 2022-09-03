// Timer starts and a question will be presented
//  Presented with another question
// Time is subtracted from the clock, when answered incorrectly
// Game is over when all questions are answered or the timer reaches 0
// Save initials and score when game is over 

// Game starts(= timer starts, questions are displayed and start_msg disappears) when start_btn is clicked
var startButton = document.getElementById('start_btn');
var timerEl = document.getElementById('timer_sec');
var answerBoxEl = document.getElementById('answer_box');
var answerButton = document.getElementsByTagName('button');

var isWin = false;

startButton.addEventListener('click', startGame)

function startGame() {
  countdown()
  firstQuestion ()
  displayAnswerBox()
  firstAnswers()
}

function countdown() {
  var timeLeft = 60;

var timeInterval = setInterval(function () {
    if (timeLeft === 0 ){
      clearInterval(timeInterval)  
    }
    // Output timeLeft to the console to double check 
    console.log(timeLeft)
    if(timeLeft === 60) {
      hideStart_btn()
    }
    // Show how many seconds left
    if (timeLeft > 0) {
      timerEl.textContent = `${timeLeft}`
    }

    else {
      timerEl.textContent = ""
    }
    timeLeft = timeLeft - 1
  }, 1000);
}

//  Display answer_box
function displayAnswerBox() {
  answerBoxEl.style.display = 'block';
 }

// Hide start_btn
function hideStart_btn() {
  startButton.style.display = 'none';
}


function firstQuestion (){
  const questions1 = 'How do you write "Hello World" in an alert box in JavaScript?'
  document.getElementById('start_msg').textContent = questions1;
}

function firstAnswers() {
  const answers1 = [
    '1. call myFunction()',
    '2. console.log(myFunction);',
    '3. function myFunction()',
    '4. myFunction()'
  ]
  answerButton[0].textContent = answers1[0];
  answerButton[1].textContent = answers1[1];
  answerButton[2].textContent = answers1[2];
  answerButton[3].textContent = answers1[3];
}

// Correct or Wrong
const correct1 = '4. myFunction()';
answerButton[0].addEventListener('click', () => {
  if(correct1 === answerButton[0].textContent){
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
  });
answerButton[1].addEventListener('click', () => {
  if(correct1 === answerButton[1].textContent){
    alert('Correct!');
  } else {
  alert('Wrong!');
}
});
answerButton[2].addEventListener('click', () => {
  if(correct1 === answerButton[2].textContent){
  alert('Correct!');
} else {
  alert('Wrong!');
}
});
answerButton[3].addEventListener('click', () => {
  if(correct1 === answerButton[3].textContent){
  alert('Correct!');
} else {
  alert('Wrong!');
}
});






// Save initials and score when game is over 
var InitialsInput = document.querySelector('#initials');
var submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

var playerInitials = InitialsInput.value
localStorage.setItem('player', playerInitials)
});

// Show score and go back to the start screen
