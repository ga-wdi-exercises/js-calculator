var value = 0
var calculator = {
  add: function(x){
    value = value + x
  },
  subtract: function(x){
    value = value- x
  },
  multiply: function(x){
    value = value * x
  },
  divide: function(x){
    value = value / x
  },
  exponent: function(x){
    value = value ** x
  },
  remainder: function(x){
    value = value % x
  }
}
