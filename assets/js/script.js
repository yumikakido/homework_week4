var startButton = document.getElementById('start_btn');
var timerEl = document.getElementById('timer_sec');
var answerBoxEl = document.getElementById('answer_box');
var initialBoxEl = document.getElementById('initial_box');
var answerButton = document.getElementsByClassName('btn');
var goBackButton = document.getElementById('goBack_btn');
var clearButton = document.getElementById('clear_btn');
var initialsAndScoreBoxEl = document.getElementById('initialsAndScore_box');
var startMsg = document.getElementById('start_msg');
var isCorrect = document.getElementById('correct');
var totalScore = document.getElementById('score');

var timeLeft = 60;
var score = 0; 
var timeIntervalId;

// Game starts(= timer starts, questions are displayed and start_msg disappears) when start_btn is clicked
startButton.addEventListener('click', startGame)

function startGame() {
	timeLeft = 60
	score = 0
	timerEl.textContent = `${timeLeft}`
	countdown()
	firstQuestion()
	displayAnswerBox()
	hideStart_btn()
}

function countdown() {
	timeIntervalId = setInterval(function () {
		// Output score to the console to double check
		console.log("score", score)
		if (timeLeft > 0) {
			timerEl.textContent = `${timeLeft}`
		}
		
		else {
			timerEl.textContent = ""
		}
		
		if (timeLeft <= 0) {
			clearInterval(timeIntervalId)
			endGame()
		}
	
		// Output timeLeft to the console to double check 
		console.log(timeLeft)

		timeLeft = timeLeft - 1
	}, 1000);
}

function displayAnswerBox() {
	answerBoxEl.style.display = 'block';
}

function hideStart_btn() {
	startButton.style.display = 'none';
}

// First question
function firstQuestion() {
	var question = '1. How do you call a function named myFunction in JavaScript?'
	startMsg.textContent = question;
	const answers = [
		'1. call myFunction();',
		'2. console.log(myFunction);',
		'3. function myFunction();',
		'4. myFunction();'
	]

	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
	}

	answerButton[0].addEventListener('click', function(){
		secondQuestion()
		isCorrect.textContent = "Wrong!"
		timeLeft = timeLeft - 10
	})
	
	answerButton[1].addEventListener('click', function(){
		secondQuestion()
		isCorrect.textContent = "Wrong!"
		timeLeft = timeLeft - 10
	})

	answerButton[2].addEventListener('click', function(){
		secondQuestion()
		isCorrect.textContent = "Wrong!"
		timeLeft = timeLeft - 10
	})

	answerButton[3].addEventListener('click', function(){
		secondQuestion()
		isCorrect.textContent = "Correct!"
		score = score + 1
	})
}	

// Second question
function secondQuestion() {
	var question = '2. How do you write “Hello World” in an alert box in JavaScrip?'
	startMsg.textContent = question;

	const answers = [
		'1. console.log("Hello World);',
		'2. alert("Hello World");',
		'3. alert.log("Hello World");',
		'4. console.text("Hello World");'
	]

	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
	}

	answerButton[0].addEventListener('click', function(){
		thirdQuestion()
		isCorrect.textContent = "Wrong!"
		//timeLeft = timeLeft - 10
	})

	answerButton[1].addEventListener('click', function(){
		thirdQuestion()
		isCorrect.textContent = "Correct!"
		score = score + 1
	})

	answerButton[2].addEventListener('click', function(){
		thirdQuestion()
		isCorrect.textContent = "Wrong!"
		//timeLeft = timeLeft - 10
	})
	
	answerButton[3].addEventListener('click', function(){
		thirdQuestion()
		isCorrect.textContent = "Wrong!"
		//timeLeft = timeLeft - 10
	})
	
}

// Third question
function thirdQuestion() {
	var question = '3. How do you add a comment in JavaScript??'
	startMsg.textContent = question;
	
	const answers = [
		'1. // This is a comment',
		'2. <! — This is a comment —>',
		'3. **This is a comment**',
		'4. /*This is a comment*/ '
	]

	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
	}
	
	answerButton[0].addEventListener('click', function(){
		fourthQuestion()
		isCorrect.textContent = "Correct!"
		score = score + 1
	})

	answerButton[1].addEventListener('click', function(){
		fourthQuestion()
		isCorrect.textContent = "Wrong!"
	})
	
	answerButton[2].addEventListener('click', function(){
		fourthQuestion()
		isCorrect.textContent = "Wrong!"
	})

	answerButton[3].addEventListener('click', function(){
		fourthQuestion()
		isCorrect.textContent = "Wrong!"
	})
}

// Fourth question
function fourthQuestion() {
	var question= '4. What does CSS stands for?'
	startMsg.textContent = question;
	
	const answers = [
		'1. Cascading Standard Sheets',
		'2. Color Style Sheets',
		'3. Cascading Style Sheets',
		'4. Computer Standard Sheets'
	]

	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
	}

	answerButton[0].addEventListener('click', function(){
		fifthQuestion()
		isCorrect.textContent = "Wrong!"
	})

	answerButton[1].addEventListener('click', function(){
		fifthQuestion()
		isCorrect.textContent = "Wrong!"
	})

	answerButton[2].addEventListener('click', function(){
		fifthQuestion()
		isCorrect.textContent = "Correct!"
		score = score + 1
	})

	answerButton[3].addEventListener('click', function(){
		fifthQuestion()
		isCorrect.textContent = "Wrong!"
	})
}

// Fifth question
function fifthQuestion() {
	var question= '5. Choose the correct HTML element to insert a line break;'
	startMsg.textContent = question;
	
	const answers = [
		'1. <line br>',
		'2. <br>',
		'3. <line>',
		'4. <break>'
	]

	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
	}
	
	answerButton[0].addEventListener('click', function(){
		isCorrect.textContent = "Wrong!"
		initialsInputPage()
		stopTimer()
	})

	answerButton[1].addEventListener('click', function(){
		isCorrect.textContent = "Correct!"
		score = score + 1
		initialsInputPage()
		stopTimer()
	})

	answerButton[2].addEventListener('click', function(){
		isCorrect.textContent = "Wrong!"
		initialsInputPage()
		stopTimer()
	})

	answerButton[3].addEventListener('click', function(){
		isCorrect.textContent = "Wrong!"
		initialsInputPage()
		stopTimer()
	})
}

function stopTimer() {
		clearInterval(timeIntervalId);
	  }

// Game ends when the timer reaches 0---------------
function endGame() {
	var doneMessage = "Time is up!";
	startMsg.textContent = doneMessage;
	answerBoxEl.style.display = "none";
	displayInitial_box()
	displayScore()
	// Save initials and score
	var initialsInput = document.querySelector('#initials');
	var submitButton = document.querySelector('#submit');

	submitButton.addEventListener('click', function (event) {
	event.preventDefault();

	var playerInitials = initialsInput.value
	localStorage.setItem('player', playerInitials)

	recordPage()
	});
}
//---------------

function displayScore() {
	totalScore.textContent = score;
}

//initialInput page---------------
function initialsInputPage() {
	displayInitial_box()
	hideQuestionAndAnswer()
	displayScore()
	// Save initials and score
	var initialsInput = document.querySelector('#initials');
	var submitButton = document.querySelector('#submit');

	submitButton.addEventListener('click', function (event) {
	event.preventDefault();

	var playerInitials = initialsInput.value
	localStorage.setItem('player', playerInitials)

	recordPage()
});
}

function hideQuestionAndAnswer() {
	var doneMessage = "All done!";
	startMsg.textContent = doneMessage;
	answerBoxEl.style.display = "none";
}

function displayInitial_box() {
	initialBoxEl.style.display = 'block';
}
//---------------

// Record page---------------
function recordPage () {
	displayGoBackAndClear_btn()
	hideInitialBox()
	renderInitials()
	displayInitialsAndScoreBox()
	isCorrect.textContent = "";
	var yourRecord = "Your initials and score";
	startMsg.textContent = yourRecord;
}

function hideInitialBox () {
	initialBoxEl.style.display = 'none';
}

function displayInitialsAndScoreBox () {
	initialsAndScoreBoxEl.style.display = "block"
}

function displayGoBackAndClear_btn() {
	goBackButton.style.display = 'inline-block';
	clearButton.style.display = 'inline-block';
}

function renderInitials() {
  var Initials = localStorage.getItem("player");
  initialsAndScoreBoxEl.textContent = Initials;
  
  if(!Initials) {
    return;
  }
}
//---------------

// Clear history---------------
clearButton.addEventListener('click', clearHistory)

function clearHistory() {
	localStorage.removeItem("player");
	initialsAndScoreBoxEl.textContent = "";
  }
//---------------

// Go back to the start page---------------
goBackButton.addEventListener('click', goBackToStart)

function goBackToStart() {
	startMsg.textContent = "Try to answer the following code-related questions within 60 seconds. There will be 5 questions (1 point each). Keep in mind that incorrect answers will penalize your time by 10 seconds. If you are ready, click on 'Start quiz'!"
	displayStart_btn()
	hideGoBackAndClear_btn()
	hideInitialsAndScoreBox()
  }

  function displayStart_btn() {
	startButton.style.display = 'inline-block';
}

function hideGoBackAndClear_btn () {
	goBackButton.style.display = 'none';
	clearButton.style.display = 'none';
}

function hideInitialsAndScoreBox (){
	initialsAndScoreBoxEl.style.display = "none"
}
//---------------

