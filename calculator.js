var calculator = {

  addition: function add(x, y) {
    console.log("*Addition* First number is: ", x)
    console.log("*Addition* Second number is: ", y)
    return x + y
  },

  subtraction: function sub(x, y) {
    console.log("*Subtraction* First number is: ", x)
    console.log("*Subtraction* Second number is: ", y)
    return x - y
  },

  multiply: function mult(x, y) {
    console.log("*Multiplication* First number is: ", x)
    console.log("*Multiplication* Second number is: ", y)
    return x * y
  },

  division: function divide(x, y) {
    console.log("*Division* First number is: ", x)
    console.log("*Division* Second number is: ", y)
    return x / y
  },

  exponent: function exp(x, y) {
    console.log("*Exponents* First number is: ", x)
    console.log("*Exponents* Second number is: ", y)
    return Math.pow(x, y)
  },

  squared: function square(x) {
    console.log("*Squared* First number is: ", x)
    return x * x
  }
}
