var calculator = {
  value = null,

  clear : function() {
    value = null;
  },

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
