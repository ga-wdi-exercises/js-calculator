var calculator = {
  add: function() {
    total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total += arguments[i];
    }
    return total;
  },
  subtract: function() {
    total = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      total -= arguments[i];
    }
    return total;
  },
  multiply: function() {
    total = 1;
    for (var i = 0; i < arguments.length; i++) {
      total *= arguments[i];
    }
    return total;
  },
  divide: function() {
    total = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      total /= arguments[i];
    }
    return total;
  },
  exponential: function(base, exponent) {
    total = 1;
    for (var i = 0; i < exponent; i++) {
      total *= base;
    }
    return total;
  }
}
