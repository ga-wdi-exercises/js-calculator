console.log("working")



var calculator = {
  value : null,
  add : function(x, y) {
    value = (typeof y !== 'undefined')? x + y : value + x
    return value
  },
  subtract : function(x, y) {
    value = (typeof y !== 'undefined')? x - y : value - x
    return value
  },
  multiply : function(x, y) {
    value = (typeof y !== 'undefined')? x * y : value * x
    return value
  },
  divide : function(x, y) {
    value = (typeof y !== 'undefined')? x / y : value / x
    return value
  },
  exponent : function(x, y) {
    value = (typeof y !== 'undefined')? Math.pow(x, y) : Math.pow(value, x)
    return value
  },
  root : function(x, y) {
    value = (typeof y !== 'undefined')? Math.pow(x, 1/y) : Math.pow(value, 1/x)
    return value
  },
  master : function(expression) {
    value = parseInt(expression)
    return value
  },
  clear : function() {
    value = null
  }
}
