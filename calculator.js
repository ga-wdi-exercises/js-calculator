// calculator with no memory
var calculator = {
  add: function (a, b) {
    console.log(a + b);
    return a + b;
  },
  subtract: function (a, b) {
    console.log(a - b);
    return a - b;
  },
  multiply: function (a, b) {
    console.log(a * b);
    return a * b;
  },
  divide: function (a, b) {
    console.log(a / b);
    return a / b;
  },
  exponent: function (a, b) {
    console.log(Math.pow(a, b));
    return Math.pow(a, b);
  },
  //Round can only be used with divide Method
  round: function (a) {
    console.log(Math.round(a));
    return Math.round(a);
  }
};

// Calculator with memory
var calc = {
  value: 0,
  add: function (x) {
    this.value += x;
    console.log(this.value);
  },
  subtract: function(x) {
    this.value -= x;
    console.log(this.value);
  },
  multiply: function (x) {
    this.value *= x;
    console.log(this.value);
  },
  divide: function (x) {
    this.value /= x;
    console.log(this.value);
  },
  exponent: function (x) {
    this.value = Math.pow(this.value, x);
    console.log(this.value);
  },
  round: function () {
    this.value = Math.round(this.value);
    console.log(this.value);
  },
  clear: function () {
    this.value = 0;
    console.log(this.value);
  },
  // I don't think I completely understand what "BONUS 2" is asking.
  master: function (string) {
    
  }
}
