//madwask 11/16/16

var calculator = {

add: function(a,b){
  sum = a + b;
  return sum;
},

subtract: function(a,b){
  sum = a - b;
  sumtotal = sum + sum;
  return sum;
},

multiply: function(a,b){
  sum = a * b;
  return sum;
},

divide: function(a,b) {
  sum = a/b;
  return sum;
},

exponent: function(a,b){
  sum = Math.pow(a,b);
  return sum;
},

squareroot: function(a){
  sum = Math.sqrt(a);
  return sum;
}

};
