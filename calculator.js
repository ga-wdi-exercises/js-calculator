var calculator = {
  add: function (num1, num2){
    return(num1 + num2);
  },
  subtraction:function (num1, num2){
    return(num1 - num2);
  },
  multiply: function (num1, num2){
    return(num1 * num2);
  },
  division: function (num1, num2){
    return(num1/num2);
  },
  exponent: function(base,exponent) {
    var value = 1;
    for(exponent; exponent > 0; exponent--) {
      value = value * base;
    }
    return value;
  },
  square: function(num1){
    return(num1*num1);
  }
};
