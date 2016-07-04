//create a Javascript object that represents a calculator
var calculator = {
  addition: function (num1, num2) {
    console.log(num1+num2);
  },
  subtraction: function (num1, num2) {
    console.log(num1-num2);
  },
  multiplication: function (num1, num2) {
    console.log(num1*num2);
  },
  division: function (num1, num2) {
    console.log(num1/num2);
  },
  exponent: function (num1, num2) {
    console.log(Math.pow(num1,num2));
  },
  squarert: function (num) {
    console.log(Math.sqrt(num));
  }
  //Bonus
  /* reset: function () {
    console.log();
  }
  */
};

console.log(calculator.addition(3,8));
console.log(calculator.subtraction(3,8));
console.log(calculator.multiplication(3,8));
console.log(calculator.division(3,8));
console.log(calculator.exponent(3,8));
console.log(calculator.squarert(49));
