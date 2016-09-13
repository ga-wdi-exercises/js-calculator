var calculator = {
  value: 0,
  clear: function() {
    //do I need to use `this.` before value each time? I tried taking it out but got `value is not defined`, but I saw in another student's that just plain `value = 0` can work?
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
