var calculator = {
  // Adding
  add: function(num1, num2) {
    return num1 + num2;
  },

  // Subtraction
  subtract: function(num1, num2) {
    return num1 - num2;
  },

  // Multiplication
  multiply: function(num1, num2) {
   return num1 * num2;
  },

  // Division
  div: function(num1, num2) {
    return num1 / num2;
  },

  // Exponentiation
  raisePower: function(base, exponent) {
    return Math.pow(base, exponent);
  }
}
