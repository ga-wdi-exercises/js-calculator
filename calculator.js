var value = 0;

var calculator = {
  add: function (a,b) {
    value = a + b
    return value
  },
  subtract: function (a,b) {
    value -= a - b
    return value
  },
  multiply: function (a,b) {
    value = a * b
    return value;
  },
  divide: function (a,b) {
    value = a / b
    return value
  },
  exponential: function (a,b) {
    value = Math.pow (a,b)
    return value
  },
  remainder: function (a) {
    value = a%b
    return value
  },
  clear: function () {
    value = 0
    return value
  }
};
