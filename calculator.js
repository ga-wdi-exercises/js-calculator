var Calculator = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2){
    return num1 - num2;
  },
  divide: function(num1, num2){
    return num1 / num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  exponent: function(num, exponent) {
    return Math.pow(num, exponent);
  },
  hello: function(name) {
    alert('Hello ' + name + '. \n Good luck at GA! ')
  }
}
