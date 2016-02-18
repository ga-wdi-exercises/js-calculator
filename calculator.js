
var calculator = {
  add: function add(num1, num2) {
    return num1 + num2;
  },
  subtraction: function subtraction(num1, num2) {
    return num1 - num2;
  },
  division: function division(num1, num2) {
    return num1/num2;
  },
  multiplication: function multiplication(num1, num2) {
    return num1 * num2;
  },
  exponents: function exponents(num1, num2) {
    return Math.pow(num1,num2);
  },
  average: function average(num1, num2, num3) {
    return (num1 + num2 + num3)/(calculator.average.length);
  }
}

value = []
value.pop
