// solution
var calc = {
  add: function (addend, augend) {
    return addend1 + addend2;
  },
  subtract: function (minuend, subtrahend) {
    return minuend - subtrahend;
  },
  multiply: function (multiplicand, multiplier) {
    return multiplicand * multiplier;
  },
  divide: function (dividend, divisor) {
    return dividend / divisor;
  },
  exponentiate: function (base, exponent) {
    return Math.pow(base, exponent);
  }
};

console.log(calc.add(4, 5));
console.log(calc.subtract(4, 5));
console.log(calc.multiply(4, 5));
console.log(calc.divide(4, 5));
console.log(calc.exponentiate(4, 5));

// bonus 1 solution by amaseda
var calc = {
  value: 0,
  add: function(addend){
    this.value += addend;
    this.showValue();
  },
  subtract: function(subtrahend){
    this.value -= subtrahend;
    this.showValue();
  },
  multiply: function(multiplier){
    this.value *= multiplier;
    this.showValue();
  },
  divide: function(divisor){
    this.value /= divisor;
    this.showValue();
  },
  exponentiate: function(exponent){
    this.value = Math.pow(this.value, exponent);
    this.showValue();
  },
  clear: function(){
    this.value = 0;
    this.showValue();
  },
  showValue: function(){
    console.log( "====================")
    console.log( "Current value: " + this.value);
    console.log( "====================")
  }
};

calc.showValue();
