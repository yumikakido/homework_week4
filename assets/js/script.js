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

// Game starts(= timer starts, questions are displayed and start_msg disappears) when start_btn is clicked
startButton.addEventListener('click', startGame)

function startGame() {
	countdown()
	firstQuestion()
	displayAnswerBox()
	hideStart_btn()
}

function countdown() {
	var timeLeft = 30;

	var timeInterval = setInterval(function () {
		if (timeLeft === 0) {
			clearInterval(timeInterval)
			endGame()
		}
		// Output timeLeft to the console to double check 
		console.log(timeLeft)

		if (timeLeft > 0) {
			timerEl.textContent = `${timeLeft}`
		}

		else {
			timerEl.textContent = ""
		}
		timeLeft = timeLeft - 1
	}, 1000);
}

function displayAnswerBox() {
	answerBoxEl.style.display = 'block';
}

function hideStart_btn() {
	startButton.style.display = 'none';
}

function firstQuestion() {
	var question = '1. How do you call a function named myFunction in JavaScript?'
	startMsg.textContent = question;
	const answers = [
		'1. call myFunction()',
		'2. console.log(myFunction)',
		'3. function myFunction()',
		'4. myFunction()'
	]

	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex  < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;

	answerButton[0].addEventListener('click', secondQuestion)
	answerButton[0].addEventListener('click', correctOrWrongZero)
	answerButton[1].addEventListener('click', secondQuestion)
	answerButton[1].addEventListener('click', correctOrWrongOne)
	answerButton[2].addEventListener('click', secondQuestion)
	answerButton[2].addEventListener('click', correctOrWrongTwo)
	answerButton[3].addEventListener('click', secondQuestion)
	answerButton[3].addEventListener('click', correctOrWrongThree)
	}

	function correctOrWrongZero() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongOne() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongTwo() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongThree() {
		isCorrect.textContent = "Correct!"
	}
}

// Second question
function secondQuestion() {
	var question = '2. How do you write “Hello World” in an alert box in JavaScrip?'
	startMsg.textContent = question;

	const answers = [
		'1. console.log("Hello World)',
		'2. alert("Hello World")',
		'3. alert.log("Hello World")',
		'4. console.text("Hello World")'
	]
	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex  < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;

	answerButton[0].addEventListener('click', thirdQuestion)
	answerButton[0].addEventListener('click', correctOrWrongZero)
	answerButton[1].addEventListener('click', thirdQuestion)
	answerButton[1].addEventListener('click', correctOrWrongOne)
	answerButton[2].addEventListener('click', thirdQuestion)
	answerButton[2].addEventListener('click', correctOrWrongTwo)
	answerButton[3].addEventListener('click', thirdQuestion)
	answerButton[3].addEventListener('click', correctOrWrongThree)
	}

	function correctOrWrongZero() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongOne() {
		isCorrect.textContent = "Correct!"
	}
	function correctOrWrongTwo() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongThree() {
		isCorrect.textContent = "Wrong!"
	}
}


// Third question
function thirdQuestion() {
	var question = '3. How do you add a comment in JavaScript??'
	startMsg.textContent = question;
	
	const answers = [
		'1. /*This is a comment*/ ',
		'2. <! — This is a comment —>',
		'3. **This is a comment**',
		'4. // This is a comment'
	]
	let buttonIndex = 0;
  	let buttonLength = answerButton.length;
  	while (buttonIndex  < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;

	answerButton[0].addEventListener('click', fourthQuestion)
	answerButton[0].addEventListener('click', correctOrWrongZero)
	answerButton[1].addEventListener('click', fourthQuestion)
	answerButton[1].addEventListener('click', correctOrWrongOne)
	answerButton[2].addEventListener('click', fourthQuestion)
	answerButton[2].addEventListener('click', correctOrWrongTwo)
	answerButton[3].addEventListener('click', fourthQuestion)
	answerButton[3].addEventListener('click', correctOrWrongThree)
	}

	function correctOrWrongZero() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongOne() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongTwo() {
		isCorrect.extContent = "Wrong!"
	}
	function correctOrWrongThree() {
		isCorrect.textContent = "Correct!"
	}
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
	answerButton[0].textContent = answers[0];
	answerButton[1].textContent = answers[1];
	answerButton[2].textContent = answers[2];
	answerButton[3].textContent = answers[3];

	answerButton[0].addEventListener('click', fifthQuestion)
	answerButton[0].addEventListener('click', correctOrWrongZero)
	answerButton[1].addEventListener('click', fifthQuestion)
	answerButton[1].addEventListener('click', correctOrWrongOne)
	answerButton[2].addEventListener('click', fifthQuestion)
	answerButton[2].addEventListener('click', correctOrWrongTwo)
	answerButton[3].addEventListener('click', fifthQuestion)
	answerButton[3].addEventListener('click', correctOrWrongThree)

	function correctOrWrongZero() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongOne() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongTwo() {
		isCorrect.textContent = "Correct!"
	}
	function correctOrWrongThree() {
		isCorrect.textContent = "Correct!"
	}	
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
  	while (buttonIndex  < buttonLength) {
    answerButton[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;

	answerButton[0].addEventListener('click', initialsInputPage)
	answerButton[0].addEventListener('click', correctOrWrongZero)
	answerButton[1].addEventListener('click', initialsInputPage)
	answerButton[1].addEventListener('click', correctOrWrongOne)	
	answerButton[2].addEventListener('click', initialsInputPage)
	answerButton[2].addEventListener('click', correctOrWrongTwo)
	answerButton[3].addEventListener('click', initialsInputPage)
	answerButton[3].addEventListener('click', correctOrWrongThree)	
	}
	function correctOrWrongZero() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongOne() {
		isCorrect.textContent = "Correct!"
	}
	function correctOrWrongTwo() {
		isCorrect.textContent = "Wrong!"
	}
	function correctOrWrongThree() {
		isCorrect.textContent = "Wrong!"
	}	
}

// When the timer reaches 0---------------
function endGame() {
	var doneMessage = "Time is up!";
	startMsg.textContent = doneMessage;
	answerBoxEl.style.display = "none";
	displayInitial_box()
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

//initialInput page---------------
function initialsInputPage() {
	displayInitial_box()
	hideQuestionAndAnswer()
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
	startMsg.textContent = "Try to answer the following code-related questions within 30 seconds. Please keep in mind that incorrect answers will penalize your score/time by 10 seconds. If you are ready, click on 'Start quiz'!"
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

