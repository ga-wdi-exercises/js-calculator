var calculator =  {
  add: function(add1, add2) {
    return add1 + add2;
  },
  subtract: function(sub1, sub2) {
    return sub1 - sub2;
  },
  multiply: function(mult1, mult2) {
    return mult1 * mult2;
  },
  divide: function(div1, div2) {
    return div1 / div2;
  },
  exponent: function(exp1, exp2) {
    return Math.pow(exp1, exp2);
  },
  modulo: function(mod1, mod2) {
    return mod1 % mod2;
  }
};

console.log(calculator.add(7, 2));
console.log(calculator.subtract(7, 2));
console.log(calculator.multiply(7, 2));
console.log(calculator.divide(7, 2));
console.log(calculator.exponent(7, 2));
console.log(calculator.modulo(7, 2));
