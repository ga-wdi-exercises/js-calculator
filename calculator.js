var calculator = {
  value: 0,
  add: function(x, y) {
  if(y) {
    this.value = x + y
  } else {
    this.value += x
  }
  return this.value;
},
  value: 0,
  subtruct: function(x, y) {
  if(y) {
    this.value = x - y
  } else {
    this.value -= x
  }
  return this.value;
  },
  value: 0,
  multiply: function(x, y) {
  if(y) {
    this.value = x * y
  } else {
    this.value *= x
  }
  return this.value;
  },
  value: 0,
  divide: function(x, y) {
  if(y) {
    this.value = x / y
  } else {
    this.value /= x
  }
  return this.value;
  },
  exponentiate: function(radius) {
  return 2 * Math.PI * radius;
  },
  getRoot: function() {
  return Math.SQRT2;
}
}
calculator.add(100, 30);
//calculator.subtruct(100, 30);
//calculator.multiply(100, 30);
//calculator.divide(100, 30);
//calculator.exponentiate(100, 30);
//calculator.getRoot(100, 30);
