var add = function(num1,num2){
  return num1 + num2;
}
var subtract = function(num1,num2){
  return num1 - num2;
}
var multiply = function(num1,num2){
  return num1 * num2;
}
var divide = function(num1,num2){
  return num1 / num2;
}
var exponents = function(num1,num2){
  return Math.pow(num1,num2)
}
var perimeter = function(num1,num2){
  return (num1*2)+(num2*2);
}
var calculator = {add,
  subtract,
  multiply,
  divide,
  exponents,
  perimeter
}
