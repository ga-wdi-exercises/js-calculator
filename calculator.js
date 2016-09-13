var calculator = {
  value: 0,
  clear: function() {
    this.value = 0;
    return this.value;
  },
  add: function(b) {
    this.value = this.value + b;
    return this.value;
  },
  subtract: function(b) {
    this.value = this.value - b;
    return this.value;
  },
  divide: function(b) {
    this.value = this.value/b;
    return this.value;
  },
  multiply: function(b) {
    this.value = this.value*b;
    return this.value;
  },
  exponentiate: function(b) {
    this.value = this.value**b;
    return this.value;
  }

}
