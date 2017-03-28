var calculator = {
  //add
  add: function() {
    //loop through and add the length of arguments
    for (var i = 0; i < arguments.length; i++) {
      calculator.value += arguments[i]
    }
    console.log(calculator.value);
  },

  //subtract
  subtract: function(num1,num2) {
    return num1 - num2;
  },
  //multiply
  multiply: function(num1,num2) {
     return num1 * num2;
  },
  //divide
  divide: function(num1,num2) {
     return num1 / num2;
  },
  //exponent
  expo: function(num1,pow) {
     return Math.pow(num1,pow)
   },
  //remainder
  modulo: function(num1,num2) {
    return num1%num2
  },
  clear: function() {
    calculator.value = null;
  },
  //store value
  value: null,
}
