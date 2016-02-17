var calc = {
  add: function (a, b) {
console.log(a + b); /* console log for my purpose*/
    return a + b;
  } ,

  sub: function (a, b) {
    return a - b;
  } ,
  divd: function(a, b) {
    return a / b;
  } ,
  mul: function(a, b) {
    return a * b;
  } ,
  exp: function(a, b) {
    return Math.pow(a, b); /* a is base and b is exponent */
  } ,
  per: function(a, b) {
    return((a / b)*100) /* percentage */
  }
};

/* To call various calculations */

calc.add();
calc.sub();
calc.divd();
calc.mul();
calc.exp();
calc.per();
