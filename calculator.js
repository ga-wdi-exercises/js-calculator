var calculator = {
  value : null,
  add : function(x, y) {
     this.value = this.value + x
      return this.value;
  },
  subtract: function(x, y) {
    this.value = this.value - x
    return this.value;
  },
  divide: function(x, y) {
    this.value = this.value / x
    return this.value;
  },
  multiply: function(x, y) {
    this.value = this.value * x
    return this.value;
  },
  sqrt: function(x) {
    this.value =this.value /Math.sqrt(x)
    return this.value;
  },
  exponentiate: function(x, y) {
    this.value = this.value ** x
    return this.value;
  },
  clear: function() {
    this.value = null
  },
  master: function(expression) {
    this.value = eval(expression)
    return this.value;
  }
}
