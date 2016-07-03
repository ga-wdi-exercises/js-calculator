var calculator = {
  value: 0;
  add: function (num1, num2) {
    return num1 + num2
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 * num2;
  },
  exponents: function (num1, num2) {
    return Math.pow(num1, num2);
  },
  random: function () {
    return (Math.random() * 10) + 1;
  },

}



### BONUS 1)

var calculator = {
  value: 0,
  add: function (num) {
    calculator.value = calculator.value + num;
    return calculator.value;
  },
  subtract: function (num) {
    calculator.value = calculator.value - num;
    return calculator.value;
  },
  multiply: function (num) {
    calculator.value = calculator.value * num;
    return calculator.value;
  },
  divide: function (num) {
    calculator.value = calculator.value / num;
    return calculator.value;
  },
  clear: function () {
    calculator.value = 0;
    return calculator.value;
  }
}


BONUS 2)

var calculator = {
  value: 0,
  master: function (string) {
    calculator.value = calculator.value + parseInt(string);
  }
  add: function (num) {
    calculator.value = calculator.value + num;
    return calculator.value;
  },
  subtract: function (num) {
    calculator.value = calculator.value - num;
    return calculator.value;
  },
  multiply: function (num) {
    calculator.value = calculator.value * num;
    return calculator.value;
  },
  divide: function (num) {
    calculator.value = calculator.value / num;
    return calculator.value;
  },
  clear: function () {
    calculator.value = 0;
    return calculator.value;
  }
}

complete.
