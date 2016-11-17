var Display= "number";
var Memory  = "0";
var   Current = "0";
var   Operation = 0;
const   MAXLENGTH = 30;

var calculator = {
}

calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return b - a;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  exponentiate: function (a, b) {
    return Math.pow(a, b);
  }
};

console.log(String(calculator.add(4, 5)));
console.log(String(calculator.subtract(4, 5)));
console.log(String(calculator.multiply(4, 5)));
console.log(String(calculator.divide(4, 5)));
console.log(String(calculator.exponentiate(4, 5)));
