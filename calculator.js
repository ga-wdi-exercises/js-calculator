value = 0;
var calculator = {
  add: function(num1, num2){
    value = num1 + num2;
    return value;
  },
  add: function(num1){
    value = num1 + value;
    return value;
  },
  subtract: function(num1, num2){
    value = num1 - num2;
    return value;
  },
  subtract: function(num1){
    value = value - num1;
    return value;
  },
  multiply: function(num1, num2){
    value = num1*num2;
    return value;
  },
  multiply: function(num1){
    value = value * num1;
    return value;
  },
  divide: function(num1, num2){
    value = num1/num2;
    return value;
  },
  divide: function(num1){
    value = value/num1;
    return value;
  },
  powerOf: function(num1, num2){
    value = Math.pow(num1, num2);
    return value;
  },
  powerOf: function(num1){
    value = Math.pow(value, num1);
    return value;
  },
  nthRoot: function(num1, num2){
    value = Math.pow(num1, 1/num2);
    return value;
  },
  nthRoot: function(num1){
    value = Math.pow(value, 1/num1);
    return value;
  }
}
