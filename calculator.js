var calculator = {
  add: function add(a,b){
    console.log(a + b)
    return a + b;
  },

  subtract: function subtract(a,b){
    console.log(a - b)
    return a - b;
  },

  multiply: function multiply(a,b){
    console.log(a * b)
    return a * b;
  },

  divide: function divide(a,b){
    console.log(a / b)
    return a / b;
  },

  exponent: function exponent(a,b){
    console.log(Math.pow(a, b))
  },

  square_root: function square_root(a){
    console.log(Math.sqrt(a))
  }


}
