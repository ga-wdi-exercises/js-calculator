var calc = {
  addition:function(var1,var2) {
    return var1+var2;
  },
  subtraction:function(var1, var2) {
    return var1-var2;
  },
  multiplication: function(var1, var2) {
    return var1*var2;
  },
  division: function(var1, var2) {
    return var1/var2;
  },
  exponent: function(var1, var2) {
    return Math.pow(var1, var2);
  },
  natural_log: function(var1) {
    return Math.log(var1);
  }
};
console.log(calc.addition(3,6));
console.log(calc.subtraction(3,6));
console.log(calc.multiplication(3,6));
console.log(calc.division(3,6));
console.log(calc.exponent(3,6));
console.log(calc.natural_log(3));
