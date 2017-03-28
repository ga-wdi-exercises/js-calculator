var calculator = {

  value: 0,

  add: function(x, y) {
    if(y) {
      var sum = x + y
    } else {
      var sum = this.value + x ;
    }
    this.value = sum
    return sum
  },

  subtract: function(x, y) {
    if(y) {
      var sum = x - y
    } else {
      var sum = this.value - x ;
    }
    this.value = sum
    return sum
  },

  multiply: function(x, y) {
    if(y) {
      var sum = x * y
    } else {
      var sum = this.value * x ;
    }
    this.value = sum
    return sum
  },

  division: function(x, y) {
    if(y) {
      var sum = x / y
    } else {
      var sum = this.value / x ;
    }
    this.value = sum
    return sum
  },

  exponent: function(x, y) {
    if(y) {
      var sum = Math.pow(x, y);
    } else {
      var sum = Math.pow(this.value, x);
    }
    this.value = sum
    return sum
  },

  max: function(x, y) {
    if(y) {
      var sum = Math.max(x, y);
    } else {
      var sum = Math.max(this.value, x);
    }
    this.value = sum
    return sum
  },

  master: function(equation) {
    if(equation) {
      var sum = eval(equation);
    }
    this.value = sum
    return sum
  },

  clear: function() {
  return this.value = 0
  }
}
