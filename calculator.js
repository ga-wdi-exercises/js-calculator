var calculator = {
  add: function(x, y) {
      console.log(x + y); },
  subtract: function(x, y) {
      console.log(x - y); },
  multiply: function(x, y) {
      console.log(x * y); },
  divide: function(x, y) {
      console.log(x / y); },
  exponents: function(x, y) {
      console.log(Math.pow(x, y)); },
  modulo: function(x, y) {
      console.log(x % y); }
}


calculator.add(1, 2);
calculator.subtract(9, 2);
calculator.multiply(3, 4);
calculator.divide(108, 4);
calculator.exponents(2, 3);
calculator.modulo(15, 4);
