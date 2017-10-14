window.onload = function(){
    // preload the function

	var warNames = [
	{
		question: "Lucretia Mott",
		answer: {
			a: 'Civil War',
			b: 'Star Wars'
		},

		correctAnswer: 'a'
	},
	{
		question: "Rush Clovis",
		answer: {
			a: 'Civil War',
			b: 'Star Wars'
		},

		correctAnswer: 'b'
	},
	{
		question: "Vestal Coffin",
		answer: {
			a: 'Civil War',
			b: 'Star Wars'
		},

		correctAnswer: 'a'
	},
	{
		question: "Absalom Baird",
		answer: {
			a: 'Civil War',
			b: 'Star Wars'
		},

		correctAnswer: 'a'
	},
	{
		question: "Terrinald Screed",
		answer: {
			a: 'Civil War',
			b: 'Star Wars'
		},

		correctAnswer: 'b'
	},
	{
		question: "Kendal Ozzel",
		answer: {
			a: 'Civil War',
			b: 'Star Wars'
		},

		correctAnswer: 'b'
	}
	];


	// ------ additional names for later --------
	// {question: "Sylvannus Baird", "answer": "civil"},
	// {question: "Ulric Dahlgren", "answer": "civil"},
	// {question: "Moxley Sorrel", "answer": "civil"},
	// {question: "Gouverneur Warren", "answer": "civil"},
	// {question: "Sim Aloo", "answer": "star"},
	// {question: "Chief Chirpa", "answer": "star"},
	// {question:: "", "answer": "star"},
	// {question: "Crix Madine", "answer": "star"},
	// {question: "Letta Turmond", "answer": "star"},
	// ------------------------------------------

	// ------------------clock timer-----------------
	function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
	}

	window.onload = function () {
	    var sixtySeconds = 60 * 1,
	        display = document.querySelector('#time');
	    startTimer(sixtySeconds, display);
	};


// -----------------main functions------------------

	// additional needed variables
	var quizArea = document.getElementById("quiz");
	var resultsArea = document.getElementById("results");
	var submitButton = document.getElementById("submit");

	// generate quiz pieces and parts
	generateQuiz(warNames, quizArea, resultsArea, submitButton, startTimer);


	// begin game functions
	function generateQuiz(questions, quizArea, resultsArea, submitButton, startTimer) {

		function showNames(questions, quizArea) {
		// show names function here
			var output = [];
			var answer;

			// for each name
			for(var i=0; i<questions.length; i++) {

				// reset answer list
				answer = [];

				// choose Star Wars or Civil War
				for(var letter in questions[i].answer) {
					// add buttons
					answer.push('<label><input type="radio" name="questions "' + i + 'value="' + letter + '">' + questions[i].answer[letter] + '</label>');
				}
			// add question and answer to output
			output.push (
				'<p><div class="name">' + questions[i].question + '</div>' + '<div class="answer">' + answer.join('') + '</div></p>');

			}
			// combine everything to create HTML for the quizArea
			quizArea.innerHTML = output.join('');
		}

		// showNames(names.quizArea); </-- bad code/disregard

		function showScore(questions, quizArea, resultsArea) {
			var answerArea = quizArea.querySelectorAll(".answer");
			var userAnswer = '';
			var numCorrect = 0;

			// for each name

			for(var i=0; i<questions.length; i++) {
				// find user's answer
				userAnswer = (answerArea[i].querySelector("input[name=question" + i + "]:checked") || {}).value;

				// if they answered correct
				if(userAnswer===questions[i].correctAnswer) {
					numCorrect++;
					answerArea[i].style.color = '#9c9d47';
				}

				else {
					answerArea[i].style.color = '#ff3366';
				}
			}

			resultsArea.innerHTML = "You scored: " + numCorrect + " out of " + questions.length + "!";
		}

		submitButton.onclick = function() {
			showScore(questions, quizArea, resultsArea);
		};

		// names

		showNames(questions, quizArea);



		// when user clicks submit, show score

		submitButton.onclick = function() {

			showScore(questions, quizArea, resultsArea);

		};

	}

};
