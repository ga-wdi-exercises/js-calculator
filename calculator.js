var value = "";
var calculator = {
// This func adds two numbers and returns the sum
  add: function(num1, num2) {
    var sum = num1 + num2;
    value += sum;
    return sum;
  },

// This func substracts two numbers and returns the difference
  substract: function(num1, num2) {
    var diff = num1 - num2;
    return diff;
  },

  // This func multiplies two numbers and returns the product

  multiply: function (num1, num2) {
    var product = num1 * num2;
    return product;
  },

  // This func divides tow numbers and returns the quotient

  divide: function(num1, num2) {
    var quotient = num1 / num2;
    return quotient;
  },

  // This func with raise the first number to the exponent of the second number

  exponent: function(num, expo) {
    var result = Math.pow(num, expo);
    return result;
  },

  // This func returns the remainder of two numbers

  remainder: function(num1, num2) {
    var result = num1 % num2;
    return result;
  },

  clear : function (value){
    value = "";
  }

};
