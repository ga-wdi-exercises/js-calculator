var value = 0;
var calculator = {
  add: function (x,y) {
    value += (x + y);
    console.log(x + y);
    return value;
  },
  subtract: function (x,y) {
    value += (x - y);
    console.log(x - y);
    return value;
  },
  multiply: function (x,y) {
    value += (x * y);
    console.log(x * y);
    return value;
  },
  divide: function (x,y) {
    value += (x / y);
    console.log(x / y);
    return value;
  },
  exponent: function (x,y) {
    value += (Math.pow(x,y));
    console.log(Math.pow(x,y));
    return value;
  },
  party: function (x,y) {
    var i = x * y * Math.random()
    value += (i);
    console.log(i);
    return value;
  },
  clear: function () {
    value = 0;
  }
};
