var calculator = {
  // made a function to allow to add
  add: function( a, b ) {
    console.log( a + b );
  },
  // made a function to allow subtraction
  subtract: function( a, b ) {
    console.log( b - a );
  },
  // made a function to allow multiplication
  multiply: function( a, b ) {
    console.log(a * b);
  },
  // made a function to allow division
  divide: function ( a, b ) {
    console.log( a / b );
  },
  // made a function to allow for exponents
  exponent: function( a, b ) {
    console.log(Math.pow(a,b));
  },
  // made a function to be able to find the remainder
  remain: function( a, b ) {
    console.log( a%b );
  }
 }


//Trying to add memory to the calculator
var value = []
