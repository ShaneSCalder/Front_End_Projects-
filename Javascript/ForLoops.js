//Problem 1
console.log("Print numbers from -10 to 19");

for(var i = -10; i < 20; i++){
	console.log(i);
}

//Problem 2
console.log("Print even numbers from 10 to 40");

for(var i = 10; i <= 40; i += 1){
	if(i % 2 === 0) {
		console.log(i);
	}
}

//Problem 3
console.log("Print odd numbers from 300 to 333");

for(var i = 300; i <= 333; i++){
	if(i % 2 !== 0) {
		console.log(i);
	}
}

//Problem 4
console.log("Print all numbers divisible by 5 & 3 between 5 and 50");

for(var i = 5; i <= 50; i++){
	if(i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}

//Problem 5
console.log("Replace Kebab with Snake");

function kebabToSnake(str) {
	var newStr = str.replace(/-/g , "_");
	return newStr;

}
