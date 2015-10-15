var calculator = {
  multiply: function( num1, num2 ) {
    return num1 * num2;
  },
  add: function( num1, num2 ) {
    return num1 + num2;
  },
  subtract: function( num1, num2 ) {
    return num1 - num2;
  },
  divide: function( num1, num2 ) {
    return num1 / num2;
  },
  exponent: function ( num1, num2 ) {
    return Math.pow(num1, num2);
  },
  percent: function ( num1, num2 ) {
    return (num1 / num2) * 100;
  }
}
