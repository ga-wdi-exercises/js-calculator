var calculator = {
  add: function( add1, add2 ) {
    return add1 + add2;
  },
  subtract: function( minus1, minus2 ) {
    return minus1 - minus2;
  },
  multiply: function( mult1, mult2 ) {
    return mult1 * mult2;
  },
  divide: function( div1, div2 ) {
    return div1 / div2;
  },
  exponent: function( base, exponent ) {
    return Math.pow(base, exponent);
  },
  arctangent: function( y, x) {
    return Math.atan2(y, x);
  }
};

console.log(calculator.add(2, 4));
console.log(calculator.subtract(4, 1));
console.log(calculator.multiply(7, 3));
console.log(calculator.divide(10, 2));
console.log(calculator.exponent(2, 3));
console.log(calculator.arctangent(4, 6));
