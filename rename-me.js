alert("JavaScript works!");

//Robert Dalum
//Assignment 3
// August 22, 2013

//Variables

var workGoals = {
	proCards : "11%",
	reservations : "22%"
};

console.log(workGoals);

//Conditionals

var tradeItems = true

if (tradeItems === true){
	console.log("Customers trading in items helps us towards reserves and cards!")
}else{
	console.log("If people don't come into the store with trades it is a little harders to get reserves or cards. ")
};

if (tradeItems === true){
	console.log("Once customers get a pro card they tend to go ahead and buy more games which leads to higher sales!")
}else{
	console.log("Lower sales, I am really really sad.")
};

var cancelItems = true

if (cancelItems === true){
	console.log("I do not understand why people preorder just to cancel.")
}else{
	console.log("I am glad that I talked the customer to preordering something else and not just canceling.")
};

//Loops

var res = 15;
while(res > 12){
	console.log(res + " reservations is a great number but we always want to be better even though it is great!");
	res--;
};

console.log("WHYYYYYYYY the cancels!!!");

//Functions

var numCust = 87
var numRes = 23
var numPro = 5
var numProCust = 56

var getVal = function (p, r){
	var pro = p/numProCust;
	var res = r/numCust;
	console.log("We got " + pro + " percent on pro and on res we ended up at " + res + " percent.");
};

getVal(5, 23);

console.log("So we killed our 20% res goal but did not get the percentage need for the pro card. ");
