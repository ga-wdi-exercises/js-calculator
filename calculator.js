var calculator = {
  add: function(number1, number2){
    return (number1 + number2)
  },
  subtract: function(number1, number2){
    return (number1 - number2)
  },
  multiply: function(number1, number2){
    return (number1 * number2)
  },
  divide: function(number1, number2){
    return (number1 / number2)
  },
  exponent: function(number1, number2){
    return (Math.pow(number1, number2))
  },
  sine: function(number){
    return (Math.sin(number))
  },
  cosine: function(number){
    return (Math.cos(number))
  }
}
