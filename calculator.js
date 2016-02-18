var calculator = {

add: function(a , b){
  console.log(a + b);
  return a + b;
} ,
subtract: function(a , b){
  console.log(a - b);
} ,
multiply: function(a , b){
  console.log(a * b);
} ,
divide: function(a , b){
  console.log(a / b);
} ,
exp: function(a, b){
	return Math.pow(a, b)
} ,
per: function(a ,b){
	return((a / b)*100)
}


};
calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();
