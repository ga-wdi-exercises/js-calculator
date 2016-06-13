var value;
var x;

var calculator = {
  add: function(x,y){
    if (value ='undefined') {
      value=x+y;
    }
    else{
      value=value + y;
    }
    return value
  },

  subtract: function(x,y){
    if (value ='undefined') {
      value=x-y;
    }
    else{
      value = value - y
    }
    return value;
  },

  multiply: function(x,y){
    if (value ='undefined') {
      value = x * y;
    }
    else{
      value=value*y;
    }
    return value;
  },

  divide: function(x,y){
    if (value ='undefined') {
      value=x/y
    }
    else {
      value= value / y;
    }
    return value;
  },

  exponents: function(x,y){
    if (value ='undefined') {
      value= Math.pow(x,y);
    }
    else {
      value= Math.pow(value,y);
    }
    return value;
  },

  squareIt: function(x){
    if (value ='undefined') {
    }
    else {
      value=x^2;
    }
    return value;
  },
  clear: function(){
    value=0;
    return value
  }
}
