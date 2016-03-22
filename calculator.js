

var calculator = {
  add: function(num1, num2){
  return (num1 + num2);
},
subtract: function(num1, num2){
    return (num1-num2);
  },
  multiply: function(num1, num2){
    return (num1 * num2);
  },
  divide: function(num1, num2){
    return (num1 / num2);
  },
  square: function(num1, num2){
    return Math.pow(num1, num2);
  },
  remainder: function(num1, num2){
    return num1 % num2
  }

}




console.log(calculator.add(5,10));
console.log(calculator.multiply(5,10));
console.log(calculator.subtract(5,10));
console.log(calculator.divide(5,10));
console.log(calculator.square(2, 3))
console.log(calculator.remainder(10, 3))
