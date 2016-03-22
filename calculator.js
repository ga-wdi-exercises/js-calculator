
//calculator(){
var calculator = {
  add: function(num1, num2){
    return num1 + num2;
  },
  subtract: function(num1, num2){
    return num1-num2;
  },

  multiply: function(num1, num2){
    return num1*num2;
  },
  divide: function(num1, num2){
    return num1/num2;
  },
  powerOf: function(base, exp){
    return Math.pow(base, exp)
  }
};
