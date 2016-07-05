var value = null;
var calculator = {
  // finished first part of assignment below
  // add: function(num1, num2) {
  //   return num1 + num2;
  //     },
  // subtract: function(num1, num2) {
  //   return num1 - num2;
  // },
  // multiply: function(num1, num2) {
  //   return num1 * num2;
  // },
  // divide: function(num1, num2) {
  //   return num1 / num2;
  // },
  // exponent: function(num1, num2) {
  //   return Math.pow(num1,num2);
  // },
  // oneless: function(num1) {
  //   return num1 - 1;
  // }

  add: function(num) {
    value = num + value;
    return value;
  },

  subtract: function(num) {
    value = value - num;
    return value;
  },

  multiply: function(num) {
    value = value * num;
    return value;
  },

  divide: function(num) {
    value = value / num;
    return value;
  },

  exponent: function(value, num) {
    value = Math.pow(value, num);
    return value;
  },

  master: function(num) {
    value = num;
    return value;
  },

  clear: function() {
    value = 0;
    return value;
  }
  }
