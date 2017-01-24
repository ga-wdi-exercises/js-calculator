var calculator = {
  value: 0,
  add: function(x,y) {
    calculator.value=(calculator.value+x+y);
    return(x+y);
  },
  subtract: function(x,y) {
    calculator.value=(calculator.value+x-y);
    return(x-y);
  },
  multiply: function(x,y) {
    calculator.value=(calculator.value+(x*y));
    return(x*y);
  },
  divide: function(x,y) {
    calculator.value=(calculator.value+(x/y));
    return(x/y);
  },
  exponent: function(x,y) {
    calculator.value=(calculator.value+(Math.pow(x+y)));
    return(Math.pow(x,y));
  },
  max: function(x,y) {
    calculator.value=(calculator.value+(Math.max(x,y)));
    return(Math.max(x,y));
  },
  clear: function() {
    calculator.value=0;
  }

}
