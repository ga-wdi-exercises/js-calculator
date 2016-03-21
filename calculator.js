var calculator = {
  add: function(x, y) {
    calculator.value = ( x + y );
    return x + y;
  },
  subtract: function(x, y) {
    calculator.value = ( x - y )
    return x - y;
  },
  multiply: function(x, y) {
    calculator.value = ( x * y )
    return x * y;
  },
  divide: function(x, y) {
    calculator.value = ( x / y);
    return (x / y);
  },
  expo: function(x, y) {
    if (y === 1) {
      calculator.value = x;
      return x;
    }
    else {
      return (x * calculator.expo(x, y - 1));
    }
  },
  storeVal: function(val) {
    calculator.value = val;
  },
  clearVal: function() {
    calculator.value = null;
  },
  value: null
}
