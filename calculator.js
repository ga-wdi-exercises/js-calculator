var value = 0;

var calculator = {
  add: function add(num1, num2) {
    value = num1 + num2;
    return value;
  },
  add: function add(num) {
    value += num;
    return value;
  },
  multiply: function multiply(num1, num2) {
    value = num1 * num2;
    return value;
  },
  multiply: function multiply(num) {
    value = value * num;
    return value;
  },
  divide: function divide(num1, num2) {
    value = num1 / num2;
    return value;
  },
  divide: function divide(num) {
    value = value / num;
    return value;
  },
  exponent: function exponent(num1, num2) {
    value = Math.pow(num1, num2);
    return value;
  },
  exponent: function exponent(num) {
    value = Math.pow(value, num);
    return value;
  }
  half: function half(num) {
    value = num / 2;
    return value;
  }
  reset: function reset() {
    value = 0;
    return value;
  }
}
