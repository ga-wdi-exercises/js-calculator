var calculator = {

  add: function(num1, num2) {
    return num1 + num2;
  },

  subtract: function(num1, num2) {
    return num1 - num2;
  },

  multiply: function(num1, num2) {
    return num1 * num2;
  },

  divide: function(num1, num2) {
    return num1 / num2;
  },

  raisePower: function(base, exponent) {
    var product = 1;

    if (exponent > 0) {
      for (var i=0; i<exponent; i++) {
        product *= base;
      }
    };

    if (exponent < 0) {
      for (var i=0; i<(exponent * -1); i++) {
        product /= base;
      }
    };

    if (exponent == 0) {
      product = 1;
    };

    return product;
  },

  divisorsOf: function(num) {
    var divisors = [];

    for (var i=1; i<=num; i++) {
      if (num%i == 0) {
        divisors.push(i);
      }
    }
    return divisors;
  },

  isPrime: function(num) {
    if (calculator.divisorsOf(num).length == 2) {
      return true;
    }
    else {
      return false;
    }
  }
}
