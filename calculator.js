var cal = {
  addition: function(num1, num2) {
   return num1 + num2;
 },
  subtraction: function(num1, num2) {
    return num1 - num2;
  },
  multiplication: function(product1, product2){
    return product1 * product2;
  },
  division: function(dividend, divisor){
    return dividend / divisor;
  },
  exponents: function(num, exponent) {
    return Math.pow(num, exponent);
  },
  decimalToPercent: function(dec){
    return dec * 100;
  }
};
