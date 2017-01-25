var calculator = {
  add:function(a, b) {
    console.log(a + b);
  },
  subtract:function(a, b) {
    console.log(a - b);
  },
  multiply:function(a, b) {
    console.log(a*b);
  },
  divide:function(a, b) {
    console.log(a / b);
  },
  powerOf:function(a, b) {
    console.log((Math.pow(a, b)));
  },
  //divide the Input in Half and then Find the Square of that Number
  squareHalf:function(a) {
    console.log((a/2)*(a/2));
  }
}
