var calculator = {

  value: 0,

  add: function(x,y){
    if (arguments.length == 2) {
        return calculator.value = x+y;
    }
    else{
        return calculator.value = (calculator.value + x);
  }
},
  subtraction: function(x,y) {
    if (arguments.length == 2) {
        return calculator.value = x-y;
    }
    else{
        return calculator.value = (calculator.value - x);
  }
},
  multiplication: function(x,y){
    if (arguments.length == 2) {
        return calculator.value = x*y;
    }
    else{
        return calculator.value = (calculator.value * x);
      }

  },
  division: function(x,y){
    if (arguments.length == 2) {
        return calculator.value = x/y;
    }
    else{
        return calculator.value = (calculator.value / x);
      }

  },
  exponents: function(x,y){
    if (arguments.length == 2) {
        return calculator.value = x**y;
    }
    else{
        return calculator.value = (calculator.value ** x);
      }

  },
  squareRoot: function(x,y){
    if (arguments.length == 0) {
        return calculator.value = Math.sqrt(x);
        alert("Only one argument can be entered for the square root function");
    }
    else{
        return calculator.value = Math.sqrt(x);

  }
}
};
