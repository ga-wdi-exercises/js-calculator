confirm("I am working!");

var calculator = {
  division: function divison(x, y) {
    return x / y;
  },
  mult: function mult(x, y) {
    return x * y;
  },
  sub: function sub(x, y) {
    return x - y;
  },
  add: function add(x, y) {
    return x + y;
  },
  square: function square(x) {
    return Math.sqrt(x);
  },
  power: function power(x, y) {
    return Math.pow(x, y);
  }
};

// calculator.mult(2, 2)
// 4
