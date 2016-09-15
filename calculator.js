

var calculator = {
  value: 0,
  add: function (x,y) {
      return x + y;
    },
  subtract: function(x,y) {
    return x - y;
  },
  multiply: function(x,y) {
    return x * y;
  },
  divide: function(x,y) {
    return x / y;
  },
  exponent: function(x,y) {
    return Math.pow(x,y);
  },
  modulus: function(x,y) {
    return x % y;
  }
}
