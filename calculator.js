var calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  power: function (num1, num2) {
    return pow(num1, num2);
  },
  ranNumBtwn: function (num1, num2) {
    return Math.abs(num1 - num2) * Math.random() + Math.min(num1, num2);
  }
}
