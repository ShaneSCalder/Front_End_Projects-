// ask for age 
var age = Number(prompt("What is your age?"));

// if age is negative
if(age < 0) {
	console.log("Come back later.");
}

// if age is 18
if(age === 18) {
	console.log("Happy 18th!");
}

// Odd age
if(age % 2 !== 0) {
	console.log("Your age is odd!");
}

// If age is a perfect square 
if(age % Math.sqrt(age) === 0) {
	console.log("Perfect square");
}
