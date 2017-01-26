// var calculator = {
//   add: function(num1, num2) {
//     return  num1 + num2;
//   },
//   subtract: function(num1,num2) {
//     return num1 - num2;
//   },
//   multiply: function(num1,num2) {
//     return  num1 * num2;
//   },
//   divide: function(num1,num2) {
//     return num1 / num2;
//   },
//   exponents: function(num1,num2) {
//     return  num1 ** num2;
//   },
//   modulus: function(num1,num2) {
//     return  num1 % num2;
//   },
//   clear: function(value) {
//     return value = 0;
//   }
// }

value = 0;
var calculator = {
  add: function(num1) {
    return value = (value + num1);
  },
  subtract: function(num1) {
    return value = (value - num1);
  },
  multiply: function(num1) {
    return  value = (num1 * value);
  },
  divide: function(num1) {
    return value / num1;
  },
  exponent: function(num1) {
    return  value ** num1;
  },
  modulus: function(num1) {
    return  value % num1;
  },
  clear: function() {
    return value = 0;
  }
}
