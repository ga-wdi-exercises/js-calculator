var calculator = {
add : function (x,y) {
  var sum = x + y;
  console.log (sum);
  },
subtract : function (x,y) {
var diff = x - y;
console.log (diff);
  },
multiply : function  (x,y) {
var product = x * y;
console.log (product);
  },
divide : function (x,y) {
var quotient = x/y;
console.log (quotient);
  },
exponent : function (x,y) {
  var power = Math.pow(x,y);
  console.log (power);
  },
remainder : function (x,y) {
  var remain = x%y;
  console.log (remain);
}
}
