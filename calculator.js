var calculator = {
  add: function (a, b){
    return{
      value:a+b,
      add:function(c){
        return calculator.add(this.value, c)
      }
    }
  },
  subtract: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a * b;
  },
  divide: function(a, b){
    return a / b
  },
  exponent: function(a){
    return a * a
  },
  pow: function(a, b){
    return Math.pow(a, b)
  }
}

calculator.add(2, 1)
