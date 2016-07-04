//objects 'add', 'subtract', 'multiply', 'divide', 'exponent' and 'mychoice' created for jscalc function
var jscalc = {
add: function add(num1, num2) {
  console.log(num1, num2);
  return num1 + num2;
},
subtract: function subtract(num1, num2) {
  console.log(num1, num2);
  return num1 - num2;
},
multiply: function multiply(num1, num2) {
  console.log(num1, num2);
  return num1 * num2;
},
divide: function divide(num1, num2) {
  console.log(num1,num2);
  return num1 / num2;
},
exponent: function exponent(num1, num2) {
  console.log(num1, num2);
  return Math.pow(num1, num2);
  //can also use ** operator for exponentiation
},
remainder: function remainder(num1, num2) {
  console.log(num1, num2);
  return num1 % num2;
},
}
