

console.log("Hello, I am a caluculator. In a moment I will ask for two numbers, and then what you would like to do with them (options: add, multiply, subtract, divide, exponent, special operator)");
var num1 = prompt("Please enter the first number");
num1 = parseInt(num1);
var num2 = prompt("Please enter the second number");
num2 = parseInt(num2);
var askManipulate;

function askedManipulate(){
  if (askManipulate != "A" || askManipulate != "S" || askManipulate != "M" || askManipulate != "D" || askManipulate != "E" || askManipulate != "R"){
    askManipulate = prompt("Please tell me how you would like to manipulate these numbers --  A - Add, S - Subtract, M -- Multiply, D -- Divide, E -- Exponent, R -- Remainder");
  }
}

askedManipulate();

function askedAdd(x, y){
  var numAdd = x + y;
  console.log(x + " + " + y + " = " + numAdd);
  return numAdd;
}

function askedSubtract(x, y){
  var numSubtract = x - y;
  console.log(x + " - " + y + " = " + numSubtract);
  return numSubtract;
}

function askedMultiply(x, y){
  var numMultiply = x * y;
  console.log(x + " * " + y + " = " + numMultiply);
  return numMultiply;
}

function askedDivide(x, y){
  var numDivide = x - y;
  console.log(x + " / " + y + " = " + numDivide);
  return numDivide;
}

function askedExponent(x, y){
  var numExponent;
  if(x === 0){
  numExponent = 0;
  }
  else {
    numExponent = 1;
  }
  for(i=0; i<y; i++){
  numExponent = numExponent * x;
}
  console.log(x + " ^ " + y + " = " + numExponent);
  return numExponent;
}

function askedRemainer(x, y){
  var numRemain = x % y;
  console.log(x + " % " + y + " = " + numRemain);
  return numRemain;
}

if (askManipulate === "A"){
  askedAdd(num1, num2);
}
else if (askManipulate === "S"){
  askedSubtract(num1, num2);
}
else if (askManipulate === "M"){
  askedMultiply(num1, num2);
}
else if (askManipulate === "D"){
  askedDivide(num1, num2);
}
else if (askManipulate === "E"){
  askedExponent(num1, num2);
}
else if (askManipulate === "R"){
  askedRemainer(num1, num2);
}


console.log("Great job calculating. You can now use the command 'calculator.(add/subtract/multiply/divide/exponent/remainder)(numberYouWant, otherNumberYouWant)' to get more calculations.");


var caluculator = {add: askedAdd(x,y), subtract: askedSubtract(), multiply: askedMultiply(), divide: askedDivide(), exponent: askedExponent(), remainder: askedRemainer()};
