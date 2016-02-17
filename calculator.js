var calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    if((num1 && num2)!===0) {
      return num1 / num2;
    },
    else return NaN;
  },
  pow: function(num1, num2) {
    return Math.pow(num1, num2);
  },
  sqrt: function(num1) {
    return Math.sqrt(num1);
  }
}
