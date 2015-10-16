// Example: running calculator.add(1,2), calculator.add(2,2) and calculator.mutliply(2,2) 
// in sequence would result in a value of 10.
// calculator.add(1,2) is 3, calculator.add(2,2) is 4, calculator.mutliply(2,2) is 4 --> does not equal 10?????

var value;

var calculator = {
  add: function(num1, num2) {
    var sum = num1 + num2;
    value += sum;
    return sum;
  },
  subtract: function(num1, num2) {
    var diff = num1 - num2;
    value += diff;
    return diff;
  },
  multiply: function(num1, num2) {
    var product = num1 * num2;
    value += product;
    return product;
  },
  divide: function(num1, num2) {
    var quotient = num1 / num2;
    values += quotient;
    return quotient;
  },
  exponent: function(num1, num2) {
    var expo = Math.pow(num1, num2);
    value += expo;
    return expo;
  },
  squareroot: function(num1) {
    var root = Math.sqrt(num1);
    value += root;
    return root;
  },
  clear: function() {
    value = 0;
  }
};
