var value = 0;

var calculator = {
  addition: function(x,y) {
    value = x + y;
    return value;
  },

  subtraction: function(x,y) {
    value = x - y;
    return value;
  },

  Multiplication: function(x,y) {
    value = x * y;
    return value;
  },

  Division: function(x,y) {
    value = x / y;
    return value;
  },

  Exponents: function(x,y) {
    value = Math.pow(x,y);
    return value;
  },

  Remainder: function(x,y) {
    value = x % y;
    return value;
  }
};
