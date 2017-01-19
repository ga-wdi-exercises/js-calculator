
var numsInPlay = [];
var numA = numsInPlay[0];
var numB = numsInPlay[1];

//  var calculator = {

// }

function add(numA, numB){
	return numA + numB;

}

function subtract(numA, numB){
	return numA - numB;
}

function multiply(numA, numB){
	return numA * numB;
}
function divide(numA, numB){
	return numA / numB;
}
function remainder(numA, numB){
	return numA % numB;
}

function insertValue(num){
	numsInPlay.push(num);
};


insertValue(2);
console.log(numsInPlay);
insertValue(3);
console.log(numsInPlay[0]);
console.log(numA);
