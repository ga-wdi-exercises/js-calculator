var value;

var calculator = {
  add: function(a, b) {
    return value = a + b;
  },
  subtract: function(a, b) {
    return value = a - b;
  },
  multiply: function(a, b) {
    return value = a * b;
  },
  divide: function(a, b) {
    return value = a / b;
  },
  exponent: function(a, b) {
    return value = Math.pow(a, b);
  },
  modulo: function(a, b) {
    return value = a % b;
  },
  clear: function() {
    return value = 0;
  },
  evaluate: function(a) {
    return value = eval(a);
  }
};
