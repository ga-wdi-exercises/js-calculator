var calc = {

  // addition
  add: function (addNum1, addNum2) {
    return addNum1 + addNum2;
  },

  // subtraction
  subtract: function (minNum1, minNum2) {
    return minNum1 - minNum2;
  },

  // multiplication
  multiply: function (multNum1, multNum2) {
    return multNum1 * multNum2;
  },

  // division
  divide: function (divNum1, divNum2) {
    return divNum1 / divNum2;
  },

  // Exponent
  exponent: function (base, exponent) {
    return Math.pow(base, exponent);
  },

  // square
  square: function (value) {
    return Math.pow(value, 2)
  }
};

console.log(calc.add(12, 6));
console.log(calc.subtract(12, 6));
console.log(calc.multiply(12, 6));
console.log(calc.divide(12, 6));
console.log(calc.exponent(12, 6));
console.log(calc.square(12));
