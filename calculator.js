var calculator = {
  add: function (addition1, addition2){
    return addition1 + addition2;
  },
  subtract: function (sub1,sub2){
    return sub1 - sub2;
  },
  multiply: function (times1,times2){
    return times1 * times2;
  },
  divide: function (divisor,dividend){
    return divisor / dividend;
  },
  exponent: function (base,exponent){
    return Math.pow(base,exponent) ;
}
};
console.log (calculator.add (5,6));
console.log (calculator.subtract (5,6));
console.log (calculator.multiply (5,6));
console.log (calculator.divide (5,6));
console.log (calculator.exponent (5,6));
