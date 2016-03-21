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
  addArray: function(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i ++) {
      sum += array[i];
    }
    calculator.value = sum;
    return sum;
  },
  storeVal: function(val) {
    calculator.value = val;
  },
  clearVal: function() {
    calculator.value = null;
  },
  value: null
}
