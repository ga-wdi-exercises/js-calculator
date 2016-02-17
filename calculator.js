var value;

var calculator = {
  add: function(num1,num2) {
    value = num1 + num2;
    return num1 + num2
  },
  sub: function(num1,num2) {
    value = num1 - num2;
    return num1 - num2;
  },
  multiply: function(num1,num2) {
    value = num1 * num2;
    return num1 * num2;
  },
  divide: function(num1,num2) {
    value = num1 / num2;
    return num1 / num2;
  },
  exp: function(num1,num2) {
    value = Math.pow(num1,num2);
    return Math.pow(num1,num2);
  },
  remain: function(num1,num2) {
    value = num1 % num2;
    return num1 % num2;
  },
  clear: function() {
    value = 0;
  }
}
calculator.remain(3,2);
console.log(value);

calculator.add(1,2)
calculator.add(2,2)
calculator.multiply(2,2)
calculator.clear();
value;
