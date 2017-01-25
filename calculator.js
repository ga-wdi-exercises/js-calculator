var value = 0;
function clear(){
  value = 0;
}
var calculator = {
  add: function(a,b) {
    if (b === undefined) {
      value = value + a;
      return value;

    } else {
      value = a + b;
      return value;
    }
  },
  subtract: function(a,b) {
    if (b === undefined) {
      value = value - a;
      return value;
    } else {
      value = a - b;
      return value;
    }
  },
  multiply: function(a,b) {
    if (b === undefined) {
      value = value * a;
      return value;
    } else {
      value = a * b;
      return value;
    }
  },
  divide: function(a,b) {
    if (b === undefined) {
      value = value / a;
      return value;
    } else {
      value = a / b;
      return value;
    }
  },
  exponent: function(a,b) {
    if (b === undefined) {
      value = Math.pow(value, a);
      return value;
    } else {
      value = Math.pow(a, b);
      return value;
    }
  },
  percentchange: function(a,b) {
    if (b === undefined) {
      value = (a - value)/value;
      return value;
    } else {
      value = (b - a)/a;
      return value;
    }
  },
  master: function(str) {
    value = eval(str);
    return value;
  }
}
