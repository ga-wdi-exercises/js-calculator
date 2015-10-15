var calculator = {
  sum: function(a, b) {
    return parseInt(a) + parseInt(b);
  },
  multiply: function(a,b) {
    return parseInt(a) * parseInt(b);
  },
  substraction: function(a,b) {
    return parseInt(a) - parseInt(b);
  },
  division: function(a,b) {
    return parseInt(a) / parseInt(b)
  },
  exponent: function (a, b) {
    return Math.pow(a,b);
  },
  square: function(a) {
    return Math.pow(a,2);
  }
};

console.log("calculator.sum(3,4)", calculator.sum(3,4));
console.log("calculator.multiply(3,4)", calculator.multiply(3,4));
console.log("calculator.substraction(9,2)", calculator.substraction(9,2));
console.log("calculator.division(10,2)", calculator.substraction(10,2));
console.log("calculator.exponent(3,3)", calculator.exponent(3,3));
console.log("calculator.square(5,2)", calculator.square(5,2));
