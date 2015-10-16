var calculator = {};

calculator.addition = function( num1, num2 ) {
  return num1 + num2;
};

calculator.subtraction = function( num1, num2 ) {
  return num1 - num2;
};

calculator.multiplication = function( num1, num2 ) {
  return num1 * num2;
};

calculator.division = function( num1, num2 ) {
  return num1 / num2;
};

calculator.exponents = function( num1, num2 ) {
  return Math.pow(num1, num2);
};

// returns logarithm of num2 with base num 1
// followd example at
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
calculator.log = function( num1, num2 ) {
  return Math.log(num2) / Math.log(num1);
};
