var calc = {
  add: function (addend1, addend2) {
    return addend1 + addend2;
  },
  subtract: function (minuend, subtrahend) {
    return minuend - subtrahend;
  },
  multiply: function (multiplicand, multiplier) {
    return multiplicand * multiplier;
  },
  divide: function (dividend, divisor) {
    return dividend / divisor;
  },
  exponentiate: function (base, exponent) {
    return Math.pow(base, exponent);
  }
};

console.log(calc.add(4, 5));
console.log(calc.subtract(4, 5));
console.log(calc.multiply(4, 5));
console.log(calc.divide(4, 5));
console.log(calc.exponentiate(4, 5));
