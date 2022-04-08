// Javascript starts here.

// display() function will change the screenvalue, calcstart and initiates the result() function.

function display(val) {
	document.getElementById("screenvalue").value+=val
	document.getElementById("calcstart").innerHTML= "Nice You're calculating"
	result()
}

// result() function will change the resultBox value.

function result(){
	let b = document.getElementById("screenvalue").value
	document.getElementById("resultBox").innerHTML= b
}

// clr() function clears the values of screenvalue, resultBox and will change the text of calcstart.

function clr(){
	document.getElementById("screenvalue").value = ""
	document.getElementById("resultBox").innerHTML= ""
	document.getElementById("calcstart").innerHTML= "Please Start Calculating..."
}

// Evaluate() function evaluates the arithmetic expression which is in string format by using eval() and displays the result on screenvalue and resultBox. Also initiates the randomquote() function

function Evaluate(){
	let x = document.getElementById("screenvalue").value
	let Y = eval(x)
	document.getElementById("screenvalue").value= Y
	document.getElementById("resultBox").innerHTML= Y
	document.getElementById("calcstart").innerHTML= "Here's the Solution!!!"
	randomquote();
}

// variable, quotes is an array with ten quotes.

let quotes = [
"\"Imagination is more important than knowledge.\"- Albert Einstein",
"\"An equation means nothing to me unless it expresses a thought of God.\" - Srinivasa Ramanujan",
"\"Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.\" - Nikola Tesla",
"\"To every action there is always opposed an equal reaction.\" - Isaac Newton",
"\"Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me.\" - Steve Jobs",
"\"If you want to succeed you should strike out on new paths, rather than travel the worn paths of accepted success.\" - John D. Rockefeller",
"\"Man is an animal that makes bargains: no other animal does this - no dog exchanges bones with another.\" - Adam Smith",
"\"The first principle is that you must not fool yourself and you are the easiest person to fool.\" - Richard Feynman",
"\"We are what our thoughts have made us; so take care about what you think. Words are secondary. Thoughts live; they travel far.\" - Swami Vivekananda",
"\"As long as you live, keep learning how to live.\" - Seneca"
];

// randomquote() is a function that displays one random quote from the above array.

function randomquote(){
let randommquote = quotes[Math.floor(Math.random() * quotes.length)]
document.getElementById("quoteGenerator").innerHTML= randommquote
}