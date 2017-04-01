var calculator = {
  //add
  add: function(num1,num2) {
    return num1 + num2
  },
  //subtract
  subtract: function(num1,num2) {
    return num1 - num2
  },
  //multiply
  multiply: function(num1, num2) {
    return num1 * num2
  },
  //divide
  divide: function(num1, num2) {
    return num1 / num2
  },
  //exponent
  expo: function(num1,pow) {
     return Math.pow(num1,pow)
   },
  //remainder
  modulo: function(num1,num2) {
    return num1%num2
  }
}

console.log(calculator.add(3,4));
console.log(calculator.subtract(15,6));
console.log(calculator.multiply(8,8));
console.log(calculator.divide(40,10));
console.log(calculator.expo(2,2));
console.log(calculator.modulo(144,12));
