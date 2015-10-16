var calculate = {
  add: function (x1, x2){
  return x1 + x2;
},


  subtract: function (x1, x2){
  return x1 - x2;
},


  multi: function (x1, x2){
  return x1 * x2;
},


  divide: function (x1, x2){
  return x1 / x2;
}
};

console.log(calculate.add(1,2));
console.log(calculate.subtract(1,2));
console.log(calculate.multi(1,2));
console.log(calculate.divide(1,2));

//bonus 1
var calculate = {
  add: function (x1, x2){
  return x1 + x2;
}
}
var math = {
  addition: calculate.add(1,2)
}
// "clear" value by putting in a blank value
console.log (math);
var math = " "

console.log(math)

//bonus 2
//i'm guessing a need a loop here, but I don't really understand the question
