var calculator = {
  add: function(num1, num2){
    return num1 + num2;
  },
  subtract: function(num1, num2){
    return num1 - num2;
  },
  multiply: function(num1, num2){
    return num1*num2;
  },
  divide: function(num1, num2){
    return num1/num2;
  },
  exponent: function(num1, num2){
    return Math.pow (num1, num2);
  },
  arccosine: function(num1){
    return Math.cos (num1);
  },
}

calculator.add(2,3);
