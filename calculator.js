console.log("Hello, I am a caluculator.");
console.log("You can use the command 'calculator.(add/subtract/multiply/divide/exponent/remainder)(numberYouWant, otherNumberYouWant)' to get calculations.");

var caluculator = {add: function (x, y){
  var numAdd = x + y;
  console.log(x + " + " + y + " = " + numAdd);
  return numAdd;
}, subtract: function (x, y){
  var numSubtract = x - y;
  console.log(x + " - " + y + " = " + numSubtract);
  return numSubtract;
}, multiply: function (x, y){
  var numMultiply = x * y;
  console.log(x + " * " + y + " = " + numMultiply);
  return numMultiply;
}, divide: function (x, y){
  var numDivide = x - y;
  console.log(x + " / " + y + " = " + numDivide);
  return numDivide;
}, exponent: function (x, y){
  var numExponent;
  if(x === 0){
    numExponent = 0;
  }
  else {
    numExponent = 1;
  }
  for(i=0; i<y; i++){
    numExponent = numExponent * x;
  }
  console.log(x + " ^ " + y + " = " + numExponent);
  return numExponent;
}, remainder: function (x, y){
  var numRemain = x % y;
  console.log(x + " % " + y + " = " + numRemain);
  return numRemain;
}};
