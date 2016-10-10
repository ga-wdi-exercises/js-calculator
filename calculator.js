
var calcValue =[];

var calculator = {
  add : function sumAll() {
    var value = 0;
    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    calcValue.splice(0, 1, value);
    return value;
  },

  subtract : function subAll(){
    var value = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        value -= arguments[i];
    }
    calcValue.splice(0, 1, value);
    return value;
  },

  multiply : function multiplyAll(){
    var value = 1;
    for (var i = 0; i < arguments.length; i++) {
        value *= arguments[i];
    }
    calcValue.splice(0, 1, value);
    return value;
  },

  divide : function divideAll(){
    var value = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        value /= arguments[i];
    }
    calcValue.splice(0, 1, value);
    return value;
  },

  exponent : function powerAll(){
    var value = arguments[0];
    for (var i = 1; i < arguments[1]; i++) {
        value =  value * arguments[0];
    }
    calcValue.splice(0, 1, value);
    return value;
  },

  remainder : function modulus(){
    var value = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        value %= arguments[i];
    }
    calcValue.splice(0, 1, value);
    return value;
  },

  clear : function(){
    calcValue =[];
    value == 0;
    return value;
  }

}
