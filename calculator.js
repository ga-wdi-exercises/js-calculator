
var calculator =  {

add: function(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2
},

subtract: function(num1, num2) {
  console.log(num1 - num2);
  return num1 - num2
},

multiply: function(num1, num2) {
  console.log(num1 * num2);
  return num1 * num2
},

divide: function divide(num1, num2) {
  console.log(num1 / num2)
  return num1 / num2
},

exponent: function exponent(num1,num2) {
  console.log(num1 ** num2)
  return num1 ** num2
},

tiptotal: function tip(billAmount){
  console.log(billAmount * (.2) + billAmount)
  return (billAmount * (.2)) + billAmount
  }
}
