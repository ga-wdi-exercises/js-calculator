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
        calc.value += num1;
        return calc.value;
      }
      else {
        calc.value = (num1 + num2);
        return calc.value;
      }
    },
    subtract: function maths(num1,num2) {
      if (num2 == null) {
        calc.value -= num1;
        return calc.value;
      }
      else {
        calc.value = (num1 - num2);
        return calc.value;
      }
    },
    multiply: function maths(num1,num2) {
      if (num2 == null) {
        calc.value *= num1;
        return calc.value;
      }
      else {
        calc.value = (num1 * num2);
        return calc.value;
      }
    },
    divide: function maths(num1,num2) {
      if (num2 == null) {
        calc.value = (calc.value / num1);
        return calc.value;
      }
      else {
        calc.value = (num1 / num2);
        return calc.value;
      }
    },
    exponent: function maths(num1,num2) {
      if (num2 == null) {
        calc.value = Math.pow(calc.value,num1);
        return calc.value;
      }
      else {
        calc.value = Math.pow(num1,num2);
        return calc.value;
      }
    },
    clear: function reset() {
      return calc.value = 0;
    }
}
