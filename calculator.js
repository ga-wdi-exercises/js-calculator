var calc = {
  add: function (addend1, addend2) {
    return addend1 + addend2;
  },
  subtract: function (minund, subtrahed) {
    return minund - subtrahed;
  },
  multiply: function (multiple, multiplier) {
    return multiple * multiplier;
  },
  divide: function (dividend, divisor) {
    return dividend / divisor;
  },
}

console.log(calc.add(3, 7));
console.log(calc.subtract(14, 7));
console.log(calc.multiply(7, 5));
console.log(calc.divide(63, 9));
