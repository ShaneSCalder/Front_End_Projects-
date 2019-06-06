// to buils an object use { } and define what you want in it. 
var customer {
	firstName: "Mike",
	lastName: "Smith",
	age: 33
	city: "LA"
};

// to select information you have tow options 

console.log(customer["lastName"]);
// or
console.log(customer.lastName);

// updating data
customer.age = 34;
// or
customer.age += 1;
