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
    if (arguments.length == 1) {
      this.value -= a;
    }
    else {
      this.value = a - b;
    }
    console.log(this.value.toString());
    return this.value;
  },
  mul : function(a,b) {
    if (arguments.length == 1) {
      this.value *= a;
    }
    else {
      this.value = a * b;
    }
    console.log(this.value.toString());
    return this.value;
  },
  div : function(a,b) {
    if (arguments.length == 1) {
      this.value /= a;
    }
    else {
      this.value = a / b;
    }
    console.log(this.value.toString());
    return this.value;
  },
  exp : function(a,b) {
    if (arguments.length == 1) {
      this.value = Math.pow(this.value,a);
    }
    else {
      this.value = Math.pow(a, b);
    }
    console.log(this.value.toString());
    return this.value;
  },
  mod : function(a,b) {
    if (arguments.length == 1) {
      this.value %= a;
    }
    else {
      this.value = a % b;
    }
    console.log(this.value.toString());
    return this.value;
    },
}
