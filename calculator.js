var calculator = {
  value: 0,

  clear: function() {
    value=0;
  },

  add: function (x,y) {
    value=x+y;
    return value;
  },

  subtract: function (x,y) {
    value=x-y;
    return value;
  },

  multiply: function (x,y) {
    value=x*y;
    return value;
  },

  divide: function (x,y) {
    value=x/y;
    return value;
  },

  exp: function (base,power) {
    var negExp;
    if (power<0) {
      negExp = true;
      power=power*-1;
    }
    var result=1;
    for (var i = 0; i < power; i++){
      result = result * base;
    }
    if (!negExp) {
      value=result;
    } else {
      value=1/result;
    }
    return value;
  }

}
