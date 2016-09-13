console.log("working")

var calculator = {
  add : function(x, y) {
    return (x + y)
  },
  subtract : function(x, y) {
    return(x - y)
  },
  multiply : function(x, y) {
    return(x * y)
  },
  divide : function(x, y) {
    return(x / y)
  },
  exponent : function(x, y) {
    return Math.pow(x, y)
  },
  root : function(x, y) {
    return Math.pow(x, 1/y)
  }
}
