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
  subtract: function() {
    // for (var i = 1; i < arguments.length; i++) {
    //   calculator.value = arguments[0] - arguments[i];
    // }

    for (var i = 0; i < arguments.length; i++) {
      calculator.value -= arguments[i];
    }

    return calculator.value
  },
  //multiply
  multiply: function(num1, num2) {
    return num1 * num2
  },
  //divide
  divide: function() {
    for (var i = 0; i < arguments.length; i++) {
      calculator.value = calculator.value / arguments[i]
    }
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
    calculator.value = 0;
  },
  //store value
  value: 0
}
