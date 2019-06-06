// Methods Used in DOM
/*

document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

*/

// how to use document.getElementById()

var tag = document.getElementById( "highlight");

// if you use this in console with DomExample.html it will select first li #

//how to use document.getElementsByClassName()

var tags = document.getElementsByClassName("bolded");
console.log(tags[0]);

// console will return list item 2 both list itmes 2 and 3 are selected

// how to use document.getElementsByTagName()

var tags = document.getElementsByTagName("li");
console.log(tags[0]);

// how to use document.querySelector() use css i.e # for id or . for class
// will return the first one found
var li = document.querySelector("#highlight");

// how to use document.querySelectorAll()
// will return all
var li = document.querySelectorAll(".bolded");
