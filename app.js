let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3); // Math.floor helps rounding down. Math.random() * 3 gives me a random number between 0-3; 3 not inculuded
	return choices[randomNumber]; // Return a random element from the array instead of the random numbers.
}

function convertToWord(letter) { // Function to replace the letter from the array into words.
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) { // The argument in the function helps figure out with which switch case they are winning
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.HTML = computerScore; // Just updating the computer score
	result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!!`; // How to place text and variables together in ES6
	userChoice_div.classList.add('green-glow'); // adds a class from the css stylesheet that is not in the html document
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300); // removes the class we just added above
}

function lose(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	userScore_span.innerHTML = userScore; // Just updating the user score
	result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose.`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${convertToWord(userChoice)} cannot lose to itself dummy. It's a draw!`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice) { 
		// All cases where the user wins
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		// All the cases where the user loses
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		// All the cases where the user ties
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	// Adding event listeners
	rock_div.addEventListener('click', () => game('r')); // This declares the userChoice in the game function.
	paper_div.addEventListener('click', () => game('p')); // This declares the userChoice in the game function.
	scissors_div.addEventListener('click', () => game('s')); // This declares the userChoice in the game function.
}

main();

