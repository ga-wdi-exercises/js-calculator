var num1 = 0
var num2 = 0
console.log ("calculator. add, subtract, multiply, divide")


var calculator = {
  add: function (num1,num2){
    var sum = 0
    sum = num1 + num2
    console.log (sum);
  },

  subtract: function (num1,num2){
  var dif = 0
  dif = num1 - num2
  console.log (dif);
 },

  multiply: function (num1,num2){
  var prod = 0
  prod = num1 * num2
  console.log (prod);
 },

  divide: function (num1,num2){
  var quot = 0
  quot = num1 / num2
  console.log (quot);
  }
};
