var calculator = {
  value : 0,
  add : function(a,b) {
    if (arguments.length == 1) {
      this.value += a;
    }
    else {
      this.value = a + b;
    }
    console.log(this.value.toString());
    return this.value;
  },
  sub : function(a,b) {
    return a - b;
  },
  mul : function(a,b) {
    return a * b;
  },
  div : function(a,b) {
    return a / b;
  },
  exp : function(a,b) {
    return Math.pow(a,b);
  },
  mod : function(a,b) {
    return a % b;
  },

}
