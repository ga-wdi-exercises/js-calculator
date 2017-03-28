var calculator = {
}

calculator.add = function(num1,num2) {
  return num1 + num2;
};

calculator.add (2, 4)

calculator.substract = function(num1,num2) {
  return num1 - num2;
};

calculator.substract (4,3)

calculator.multiply = function(num1,num2){
  return num1 * num2;
}

calculator.multiply (8,4)

calculator.divide = function(num1, num2) {
  return num1 / num2;
}

calculator.divide (9,3)

calculator.exponent = function(num1,num2) {
  var sum = 1
  for(num2; num2 > 0; num2--){
  sum = sum * num1
  }
  return sum;
}

 calculator.exponent (6,2)

 calculator.decrement = function(num1) {
   return num1--;
 }

calculator.decrement (9)
