var calculator={

}

calculator.add = function(x,y){
return x + y;
};

calculator.add(2,4)


var calculator={

}

calculator.subtract=function(x,y){
return x-y;
};

calculator.subtract(10,5)


var calculator={

}

calculator.multiply=function(x,y){
  return x*y;
};

calculator.multiply(6,4)


var calculator={

}

calculator.divide=function(x,y){
  return x/y;
};

calculator.divide(30,5)


var calculator={
exponent:function(x,y){
  var sum=1;
  for(x; x>0; x--) {
    sum=sum*x;
  }
  return sum;
 }
};
calculator.exponent(5,5);
