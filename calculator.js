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
    var result=1;
    for (var i = 0; i < power; i++){
      result = result * base;
    }
    return result;;
  }

}
