// var calculator = {
//   add: function maths(num1,num2) {
//     return (num1 + num2);},
//   subtract: function maths(num1,num2) {
//     return (num1 - num2);},
//   multiply: function maths(num1,num2) {
//     return (num1 * num2);},
//   divide: function maths(num1,num2) {
//     return (num1/num2);},
//   exponent: function maths(num1,num2) {
//     return Math.pow(num1,num2);}
// }

var calculator = {
  value: 0,
  add: function maths(num1,num2) {
      if (num2 == null) {
        calculator.value += num1;
        return calculator.value;
      }
      else {
        calculator.value = (num1 + num2);
        return calculator.value;
      }
    },
    subtract: function maths(num1,num2) {
      if (num2 == null) {
        calculator.value -= num1;
        return calculator.value;
      }
      else {
        calculator.value = (num1 - num2);
        return calculator.value;
      }
    },
    multiply: function maths(num1,num2) {
      if (num2 == null) {
        calculator.value *= num1;
        return calculator.value;
      }
      else {
        calculator.value = (num1 * num2);
        return calculator.value;
      }
    },
    divide: function maths(num1,num2) {
      if (num2 == null) {
        calculator.value = (calculator.value / num1);
        return calculator.value;
      }
      else {
        calculator.value = (num1 / num2);
        return calculator.value;
      }
    },
    exponent: function maths(num1,num2) {
      if (num2 == null) {
        calculator.value = Math.pow(calculator.value,num1);
        return calculator.value;
      }
      else {
        calculator.value = Math.pow(num1,num2);
        return calculator.value;
      }
    },
    clear: function reset() {
      return calculator.value = 0;
    }
}
