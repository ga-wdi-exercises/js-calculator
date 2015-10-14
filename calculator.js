var calc = {
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

console.log(calc.add(4, 5));
console.log(calc.subtract(4, 5));
console.log(calc.multiply(4, 5));
console.log(calc.divide(4, 5));
console.log(calc.exponentiate(4, 5));
