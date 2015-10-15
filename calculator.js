var calc = {
  add: function (addend1, addend2) {
    return addend1 + addend2;
  },

  subtract: function (sub1, sub2) {
    return sub1 - sub2;
  },

  mutliply: function (multi1, multi2){
    return multi1 * multi2;
  },

  division: function (div1, div2) {
    return div1/div2;
  },

  exponents: function (base, exponent) {
    return Math.pow(base, exponent);
  }

  modulo: function (num1, num2) {
    return num1 % num2;
  }
};
