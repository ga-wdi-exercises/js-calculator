// Javascript Calculator
//
// Your task is to create a Javascript object that represents a calculator. It should have methods that provide it with the following functionality...
//
// Addition
// Subtraction
// Multiplication
// Division
// Exponents (Hint: Look up Javascript's Math object)
// An operation of your choice!
// You should be able to run these methods like so from your browser's Javascript console...
//
// calculator.add(1,2);
// // => 3
// Bonus 1
//
// Give your calculator memory and allow it to persist the result of multiple operations.
//
// Store this result in a value property.
// Example: running calculator.add(1,2), calculator.add(3,2) and calculator.mutliply(5,2) in sequence would result in a value of 10. In this example, the first argument for each method call represents the running value.
// Give your calculator a clear method that resets value.
// Bonus 2
//
// Give your calculator a "master" method that can parse through a string of operations (e.g., (2 - 1) * (5 ^ 2))
//
// Your calculator should still have memory.

var calculator = {
add: function(num1,num2){
  return num1 + num2;
},
subtract: function(num1,num2){
  return num1-num2;
},
multiply: function(num1, num2){
  return num1 * num2;
},
divide: function(num1, num2){
  return (num1/num2);
},
exponent: function(num1, num2){
  return Math.pow(num1, num2);
},
modulo: function(num1, num2){
  return num1 % num2
}
}
