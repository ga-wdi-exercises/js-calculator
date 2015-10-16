var calc = {
  add: function (add1, add2) {
    return add1 + add2;
  },
  sub: function (sub1, sub2) {
    return sub1 - sub2;
  },
  mult: function (mult1, mult2) {
    return mult1 * mult2;
  },
  div: function (div1, div2) {
    return div1 / div2;
  },
  expo: function (base, exponent) {
    return Math.pow(base, exponent);
  }
};

console.log(calc.add(2, 6));
console.log(calc.sub(2, 6));
console.log(calc.mult(4, 5));
console.log(calc.div(2, 6));
console.log(calc.expo(2, 6));
