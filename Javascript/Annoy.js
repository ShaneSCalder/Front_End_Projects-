// version 1
//var answer = prompt("Are we there yet?");

//while(answer !== "yes") {
	//var answer = prompt("Are we there yet?");
//}

//alert("We made it");

//version 2 any string with yes in it 
var answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("We made it");
