var value = 0;

var calc = {
  add: function (num1,num2) {
    console.log(num1+num2);
    value += (num1+num2);
  },
  subtract: function (num1,num2) {
    console.log(num1-num2);
    value += (num1-num2);
  },
  multiply: function (num1,num2) {
    console.log(num1*num2);
    value += (num1*num2);
  },
  divide: function (num1,num2) {
    console.log(num1/num2);
    value += (num1/num2);
  },
  exp: function (num1,num2) {
    console.log(Math.pow(num1,num2));
    value += Math.pow(num1,num2);
  },
  circleArea: function (r) {
    console.log(Math.PI*(r*r));
    value += Math.PI*(r*r);
  },
  clear:function () {
    value = 0;
  },
  master: function(operation){
    console.log(eval(operation));
    value += eval(operation);
  }
}
