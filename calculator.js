var calculator = {
   var value = 0,

  clear : function() {
    value = 0;
  },

// Operations with only one argument
  add : function(x) {
    value += x;
    return value;
  },
  subtract : function(x) {
    value -= x;
    return value;
  },
  multiply : function(x) {
    value *= x;
    return value;
  },
  divide : function(x) {
    value /= x;
    return value;
  },
  exponent : function(x) {
    value = Math.pow(value, x);
    return value;
  },
  modulus : function(x) {
    value = value % x;
    return value;
  },

// Operations with two arguments
  add : function(x, y) {
    value = x + y;
    return x + y;
  },
  subtract : function(x, y) {
    value = x - y;
    return x - y;
  },
  multiply : function(x, y) {
    value = x * y;
    return x * y;
  },
  divide : function(dividend, divisor) {
    value = x / y;
    return x / y;
  },
  exponent : function(base, power) {
    value = Math.pow(base, power);
    return Math.pow(base, power);
  },
  modulus : function(x, y) {
    value = x % y;
    return x % y;
  },
}


console.log(calculator.exponent(2, 5));
