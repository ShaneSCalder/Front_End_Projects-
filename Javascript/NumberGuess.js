// Create secret number
var secret = 6;

// Ask for guess
var stringGuess = prompt("Guess a number between 1 and 15.");
var guess = Number(stringGuess);

//Check guess

if(guess === secret) {
	alert("You got it right.");
}

// Higher 
else if(guess > secret) {
	alert("Too high. Guess agian.");
}

// Lower
else {
	alert("Too low. Guess again.");
}
