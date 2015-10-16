var calculator = {
  value: 0,
  add: function(num1, num2) {
    calculator.value += (num1 + num2);
    return calculator.value;
  },
  subtract: function(num1, num2) {
    calculator.value += (num1 - num2);
    return calculator.value;
  },
  multiply: function(num1,num2){
    calculator.value += (num1 * num2);
    return calculator.value;
  },
  divide: function(num1, num2) {
    calculator.value += (num1 / num2);
    return calculator.value;
  },
  exponent: function(num1, num2) {
    calculator.value += Math.pow(num1, num2);
    return calculator.value;
  },
  remainder: function(num1, num2) {
    calculator.value += (num1 % num2);
    return calculator.value;
  },
  clear: function() {
    calculator.value = 0;
  }
};
