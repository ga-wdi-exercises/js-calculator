console.log("Please select an operator: .add, .subtract, .multiply, .division, .exponents, .remainder!")

var calculator = {
  add: function(x,y){
    console.log(x+y);},
  subtract: function(x,y){
    console.log(x-y);},
  multiply: function(x,y){
    console.log(x*y);},
  division: function(x,y){
    console.log(x/y);},
  exponents: function(x,y){
    console.log(Math.pow(x,y));},
    remainder: function(x,y){
      console.log(x%y);},
}
