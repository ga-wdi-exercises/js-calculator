var calculator = {
  result: 0,
  add: function (x, y) {
    this.result += x + y;
    return this.result;
  },
  subtract: function (x, y) {
    this.result += x - y;
    return this.result;
  },
  multiply: function (x, y) {
    this.result += (x * y);
    return this.result;
  },
  divide: function (x, y) {
    this.result += (x / y);
    return this.result;
  }
};


// calculator.add(2,3);
// calculator.add(4,4);

calculator.divide(12,3);
calculator.divide(4,2);

console.log(calculator.result);
