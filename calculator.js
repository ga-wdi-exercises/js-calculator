var calculator = {
  add: function(value1, value2){
    return (value1 + value2);
  },
  subtract: function(value1, value2){
    return (value1 - value2);
  },
  multiply: function(value1, value2){
    return (value1 * value2);
  },
  divide: function(value1, value2){
    return (value1 / value2);
  },
  exponent: function(value1, expValue){
    return (Math.pow(value1, expValue));
  },
  remainder: function(value1, value2){
    return (value1 % value2);
  }
}
