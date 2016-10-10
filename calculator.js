var calculator = {
  add: function(x, y){
    return x + y;
  },
  subtract: function(x, y){
    return x - y;
  },
  multiply: function(x, y){
    return x * y;
  },
  divide: function(x, y){
    return x/y;
  },
  exponent: function(x, y){
    return Math.pow(x,y);
  },
  remainder: function(x, y){
    return x%y;
  },
}

/* BONUS 1*/

var value = 0;

var calculator2 = {
  add: function (x){
    value += x;
    return value;
  },
  subtract: function (x){
    value -= x;
    return value;
  },
  multiply: function (x){
    value *= x;
    return value;
  },
  divide: function (x){
    value /= x;
    return value;
  },
  exponent: function(x){
    value = Math.pow(value, x);
    return value;
  },
  remainder: function(x){
    value %= x;
    return value;
  },
  clear: function(){
    value = 0;
    return value;
  }
}
