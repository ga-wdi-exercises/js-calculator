var calculator = {
  add: function(x,y){
    if (y == undefined){
      if (calculator.value == undefined){
        calculator.value = 0;
        y = calculator.value;
      }
      else {
        y = calculator.value;
      }
    }
    calculator.value = x+y;
    return x+y;
  },
  sub: function(x,y){
    if (y == undefined){
      if (calculator.value == undefined){
        calculator.value = 0;
        y = x;
        x = calculator.value;
      }
      else {
        y = x;
        x = calculator.value;
      }
    }
    calculator.value = x-y;
    return  x-y;
  },
  mult: function(x,y) {
    if (y == undefined){
      if (calculator.value == undefined){
        calculator.value = 0;
        y = calculator.value;
      }
      else {
        y = calculator.value;
      }
    }
    calculator.value = x*y;
    return x*y;
  },
  div: function(x,y) {
    if (y == undefined){
      if (calculator.value == undefined){
        calculator.value = 0;
        y = x;
        x = calculator.value;
      }
      else {
        y = x;
        x = calculator.value;
      }
    }
    calculator.value = (x/y);
    return (x/y);
  },
  exp: function(x, y) {
    var ans = 1;
    if (y == undefined){
      if (calculator.value == undefined){
        calculator.value = 0;
        y = x;
        x = calculator.value;
      }
      else {
        y = x;
        x = calculator.value;
      }
    }
    y = Math.abs(y);
    for (var i=1; i<=y;i++){
      ans = ans * x;
    }
    calculator.value = ans;
    return ans;
  },
  rem: function(x,y) {
    if (y == undefined){
      if (calculator.value == undefined){
        calculator.value = 0;
        y = x;
        x = calculator.value;
      }
      else {
        y = x;
        x = calculator.value;
      }
    }
    calculator.value = x % y;
    return x % y;
  },
  value: undefined,
  clear: function() {
    calculator.value = undefined;
  }
};
