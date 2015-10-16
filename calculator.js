

var calculator = {
  add: function ( num1, num2 ) { return num1 + num2 },
  subtract: function ( num1, num2 ) { return num1 - num2; },
  multiply: function ( num1, num2 ) { return num1 * num2; },
  divide: function ( num1, num2 ) { return num1 / num2; },
  pow: function ( num1, num2 ) { return Math.pow(num1, num2); },
  floor_divide: function ( num1, num2 ) { return Math.floor( num1 / num2 ); },
  mod: function ( num1, num2 ) { return num1 % num2; },
  help: function () { console.log("Functions: add, subtract, multiply, divide, floor_divide, mod, pow."); },
  mem: [],
  clear: function () { this.mem = []; },
  master: function () { console.log("Not implemented."); }
};

var calc = calculator;
