var calculator = {
  add: function(number1, number2){
    return(number1 + number2)
  }
  subtract: function(number1, number2){
    return(number1 - number2)
  }

  multiply: function(number1, number2){
    return(number1 * number2)
  }

  divide: function(number1, number2){
    return(number1 % number2)
  }

  exponent: function (number1, number2){
    Math.pow(number1, number2)
  }
}



console.log(calculator.add (1, 2));
console.log(calculator.subtract (1, 2));
console.log(calculator.multiply (1, 2));
console.log(calculator.divide (1, 2));
console.log(calculator.exponent (1, 2));
