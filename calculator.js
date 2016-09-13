var calc = {
  value: 0,
  clear: function() {
    this.value = 0;
    return this.value;
  },
  add: function(b) {
    this.value = this.value + b;
    return this.value;
  },
  sub: function(b) {
    this.value = this.value - b;
    return this.value;
  },
  div: function(b) {
    this.value = this.value/b;
    return this.value;
  },
  mult: function(b) {
    this.value = this.value*b;
    return this.value;
  },
  pow: function(b) {
    this.value = this.value**b;
    return this.value;
  }

}
