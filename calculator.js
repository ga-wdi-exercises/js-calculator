var value = 0;

var calculator = {
  add: function(b) {
    value = value + b;
    return value;
  },
  subtract: function(b) {
    value = value - b;
    return value;
  },
  multiply: function(b) {
    value = value * b;
    return value;
  },
  divide: function(b) {
    value = value / b;
    return value;
  },
  powerOf: function(b) {
    value = value ** b;
    return value;
  },
  square: function() {
    value = value * value;
    return value;
  },
  clear: function() {
    value = 0;
  }
}
