confirm("I am working!");

var calculator = {
  division: function divison(x, y) {
    value = x / y;
    return value;
  },
  mult: function mult(x, y) {
    value = x * y;
    return value;
  },
  sub: function sub(x, y) {
    value = x - y;
    return value;
  },
  add: function add(x, y) {
    value = x + y;
    return value;
  },
  square: function square(x) {
    value = Math.sqrt(x);
    return value;
  },
  power: function power(x, y) {
    value = Math.pow(x, y);
    return value;
  },
  clear: function clear() {
    value = null;
    return value;
  }
};

// calculator.mult(2, 2)
// 4
