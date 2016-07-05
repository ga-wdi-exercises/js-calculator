var calculator = {
   value: 0,

  clear : function() {
    value = 0;
  },

// Note: JS does not support function overloading;
// Instead, we must manually check the number of and type of arguments

  add : function(x, y) {
    if (arguments.length == 1) {
      calculator.value += x;
      return calculator.value;
    } else {
      value = x + y;
      return x + y;
    }
  },

  subtract : function(x, y) {
    if (arguments.length == 1) {
      calculator.value -= x;
      return calculator.value;
    } else {
      value = x - y;
      return x - y;
    }
  },
  multiply : function(x, y) {
    if (arguments.length == 1) {
      calculator.value *= x;
      return calculator.value;
    } else {
      value = x * y;
      return x * y;
    }
  },
  divide : function(x, y) {
    if (arguments.length == 1) {
      calculator.value /= x;
      return calculator.value;
    } else {
      value = x / y;
      return x / y;
    }
  },
  exponent : function(x, y) {
    if (arguments.length == 1) {
      calculator.value = Math.pow(calculator.value, x);
      return calculator.value;
    } else {
      calculator.value = Math.pow(x, y);
      return Math.pow(x, y);
    }
  },
  modulus : function(x, y) {
    if (arguments.length == 1) {
      calculator.value %= x;
      return calculator.value;
    } else {
      value = x % y;
      return x % y;
    }
  },
}
