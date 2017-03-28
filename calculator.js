var calculator = {
  result: 0,
  add: function() {
    if (calculator.result) {
      for (let i = 0;i < arguments.length; i++) {
        calculator.result += arguments[i];
      }
    }
    else {
     for (let i = 0;i < arguments.length; i++) {
        calculator.result += arguments[i];
      }
    }
   return calculator.result;
  },
  subtract: function() {
    if (calculator.result) {
      for (let i = 0;i < arguments.length; i++) {
        calculator.result -= arguments[i];
      }
    }
    else {
      var args = Array.prototype.slice.call(arguments);
      var difference = args.reduce(function(a,b) {
        return a - b;
      });
    calculator.result = difference;
    }
    return calculator.result;
  },
  multiply: function() {
    if (calculator.result) {
      for (let i = 0;i < arguments.length; i++) {
        calculator.result *= arguments[i];
      }
    }
    else {
      calculator.result = 1;
      for (let i = 0;i < arguments.length;i++) {
        calculator.result *= arguments[i];
      }
    }
    return calculator.result;
  },
  divide: function() {
    if (calculator.result) {
      for (let i = 0;i < arguments.length; i++) {
        calculator.result /= arguments[i];
      }
    }
    else {
      var args = Array.prototype.slice.call(arguments);
      var difference = args.reduce(function(a,b) {
        return a / b;
      });
    calculator.result = difference;
    }
    return calculator.result;
  },
  exponent: function(a,b) {
    if (calculator.result) {
      for (let i = 0;i < arguments.length; i++) {
       calculator.result *= calculator.result;
      }
    }
    else {
      calculator.result = 1;
      for (b; b > 0; b--) {
        calculator.result *= a ;
      }
    }
    return calculator.result;
  }
};  
