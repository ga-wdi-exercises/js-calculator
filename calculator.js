var calculator = {
  value: 0,
  add: function(x,y) {
    calculator.value=(calculator.value+x+y);
    return(x+y);
  },
  subtract: function(x,y) {
    return(x-y);
  },
  multiply: function(x,y) {
    return(x*y);
  },
  divide: function(x,y) {
    return(x/y);
  },
  exponent: function(x,y) {
    return(Math.pow(x,y));
  },
  max: function(x,y) {
    return(Math.max(x,y));
  },
  clear: function() {
    calculator.value=0;
  }



// // Give your calculator memory and allow it to persist the result of multiple operations.
// // * Store this result in a `value` property.
//
// var 'value' = console.log(this);
}
