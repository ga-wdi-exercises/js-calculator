 var calculator = {
   //these anonymous functions can also be written
   //in the form var = (parameter/s) => function
   //no "return" statement necessary.
  add: function (a, b) {
   return a + b
  },
  subtract: function (a, b) {
   return a - b
  },
  multiply: function (a, b) {
    return a * b
  },
  divide: function (a, b) {
    return a / b
  },
  exponent: function (a, b) {
    return Math.pow(a, b)
  },
  remainder: function (a, b) {
    return a % b
  }
}
