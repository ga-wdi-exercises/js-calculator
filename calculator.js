var calculator =  {
  add: function (addnum1, addnum2) {
    return (addnum1 + addnum2);
  },
  subtract: function (subnum1, subnum2) {
   return (subnum1 - subnum2);
  },
  multiply: function (multnum1, multnum2) {
   return (multnum1 * multnum2);
  },
  divide: function (divnum1, divnum2) {
   return (divnum1 / divnum2);
  },
  exponential: function (expnum1, expnum2) {
   return Math.pow(expnum1, expnum2);
  },
  moddivide: function (modnum1, modnum2) {
   return (modnum1 % modnum2);
  }
};
calculator.add(10,5);
calculator.subtract(10,5);
calculator.multiply(10,5);
calculator.divide(10,5);
calculator.exponential(10,5);
calculator.moddivide(10,5);
