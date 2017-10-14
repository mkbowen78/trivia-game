$(document).ready(function() {


var counter = 0,
	score = 0;

var content = [
{"name": "Lucretia Mott", "answer": "civil"},
{"name": "Vestal Coffin", "answer": "civil"},
{"name": "Absalom Baird", "answer": "civil"},
{"name": "Sylvannus Baird", "answer": "civil"},
{"name": "Ulric Dahlgren", "answer": "civil"},
{"name": "Moxley Sorrel", "answer": "civil"},
{"name": "Gouverneur Warren", "answer": "civil"},
{"name": "Sim Aloo", "answer": "star"},
{"name": "Chief Chirpa", "answer": "star"},
{"name": "Rush Clovis", "answer": "star"},
{"name": "Crix Madine", "answer": "star"},
{"name": "Letta Turmond", "answer": "star"},
{"name": "Kendal Ozzel", "answer": "star"},
{"name": "Terrinald Screed", "answer": "star"}];

// game element variables

var name = $('.name'),
	generate = $('.generate'),
	result = $('results'),
	score = $('.score'),
	thanks = $('.thanks'),
	options = $('.options');

var warsApp = {};

// start status of game

warsApp.init = function() {
	var selection = content[counter];
	type = selection[".answer"];
	name.html(selection[".name"]);
	generate.hide();
	result.hide();
	score.hide();
	thanks.hide();
};

warsApp.generate = function() {

	// cycle through questions

	if (counter < content.length) {
		var selection = content[counter];
		name.html(selection[".name"]);
		type = selection[".answer"];

		result.hide();
		score.hide();
		name.show();
		options.show();

	// end game once all questions are quesions are answered
	}

	else {
		thanks.show().append("Thanks for playing! You scored " + score + " out of " + counter + "!");
	}

	generate.hide();

};

	// check for correct answer
$(".choice").click(function(e) {
	var chosenAnswer = e.target.id;
	result.show();
	score.show();
	name.hide();
	options.hide();

	// create question structure

	if (type == "star") {
		fullAnswer = "Star Wars Character";
	}
		else {
			fullAnswer = "Civil War Figure";
		}

	// add point for right answer

	if (chosenAnswer == type) {
		result.html("<span class='right'>Nailed it!</span> This is a " + fullAnswer + ".");
		score++;
	}
	else {
		result.html("<span class='wrong'>Nooope!</span> It's actually a " + fullAnswer + "!");
		}

	counter++;
	score.html("You got " + score + " right, out of " + counter + "!");
	generate.show();

});

});
