console.log("Use Object: 'calculator' to input New Numbers");
console.log("Use Object: 'memory' to affect the Last Result");
console.log("The Memory Value can be cleared via either Object");

var value;

var calculator = {
  add:function(a, b) {
    value = (a + b);
    console.log(value);
  },
  subtract:function(a, b) {
    value = (a - b);
    console.log(value);
  },
  multiply:function(a, b) {
    value = (a*b);
    console.log(value);
  },
  divide:function(a, b) {
    value = (a/b);
    console.log(value);
  },
  powerOf:function(a, b) {
    value = (Math.pow(a, b));
    console.log(value);
  },
  //divide the Input in Half and then Find the Square of that Number
  squareHalf:function(a) {
    value = ((a/2)*(a/2));
    console.log(value);
  },
  clear:function() {
    value = NaN;
    console.log("Calculator has been cleared");
  }
}

var memory = {
  add:function(a) {
    value = (value + a);
    console.log(value);
  },
  subtract:function(a) {
    value = (value - a);
    console.log(value);
  },
  multiply:function(a) {
    value = (value*a);
    console.log(value);
  },
  divide:function(a) {
    value = (value/a);
    console.log(value);
  },
  powerOf:function(a) {
    value = (Math.pow(value, a));
    console.log(value);
  },
  //divide the Input in Half and then Find the Square of that Number
  squareHalf:function() {
    value = ((value/2)*(value/2));
    console.log(value);
  },
  clear:function() {
    value = NaN;
    console.log("Calculator has been cleared");
  }
}
