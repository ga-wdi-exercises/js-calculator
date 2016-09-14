var calculator = {
  mem1: 0,
  clear: function() {
    calculator.mem1 = 0;
  },
  notNumber: function(x,y) {
    if (y === undefined) {
      return console.log("'" + x + "' is not a number.");
    } else {
      return console.log("'" + x + "' or '" + y + "' is not a number.");
    }
  },
  add: function(x,y) {
    if (isNaN(x) || (isNaN(y) && y !== undefined)) {
      return calculator.notNumber(x,y);
    }
    if (y === undefined) {
      y = x;
      x = calculator.mem1;
    }
    x = parseInt(x);
    y = parseInt(y);
    return calculator.mem1 = x + y;
  },
  subtract: function(x,y) {
    if (isNaN(x) || (isNaN(y) && y !== undefined)) {
      return calculator.notNumber(x,y);
    }
    if (y === undefined) {
      y = x;
      x = calculator.mem1;
    }
    x = parseInt(x);
    y = parseInt(y);
    return calculator.mem1 = x - y;
  },
  multiply: function(x,y) {
    if (isNaN(x) || (isNaN(y) && y !== undefined)) {
      return calculator.notNumber(x,y);
    }
    if (y === undefined) {
      y = x;
      x = calculator.mem1;
    }
    x = parseInt(x);
    y = parseInt(y);
    return calculator.mem1 = x * y;
  },
  divide: function(x,y) {
    if (isNaN(x) || (isNaN(y) && y !== undefined)) {
      return calculator.notNumber(x,y);
    }
    if (y === undefined) {
      y = x;
      x = calculator.mem1;
    }
    x = parseInt(x);
    y = parseInt(y);
    return calculator.mem1 = x / y;
  },
  raise: function(x,y) {
    if (isNaN(x) || (isNaN(y) && y !== undefined)) {
      return calculator.notNumber(x,y);
    }
    if (y === undefined) {
      y = x;
      x = calculator.mem1;
    }
    x = parseInt(x);
    y = parseInt(y);
    return calculator.mem1 = x ** y;
  }
}
