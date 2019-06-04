var todos = ["Buy new shoes"];

var input = prompt("what would you like to do");

while(input !== "quit"){
	//handle intput
	if(input === "list") {
		todoList();
	} else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deleteTodo();
	}
	// ask agin for new input
	input = prompt("What do you want to do?");
}
console.log("Quiter");

function todoList() {
	console.log("************")
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("************")
}

function addTodo() {
	// Request new todo
	var newTodo = prompt("Enter new todo");
	//add to todo array
	todos.push(newTodo);
	console.log("Added todo " + newTodo);
}

function deleteTodo() {
	//ask for index array item to delete
	var index = prompt("Enter index of todo to delete");
	// delete the todo
	// Use splice()
	todos.splice(index,1);
	console.log("Deleted todo " + index);
}
