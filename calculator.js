var value = 0;
var calculator = {
  add: function (x) {
        value += x;
        return value;
  },
  subtract: function (x) {
              value -= x;
              return value;
  },
  multiply: function (x) {
              value *= y;
              return value;
  },
  divide: function (x) {
            value /= x;
            return value;
  },
  remainder: function (x) {
              value %= x;
              return value;
  },
  exponent: function (x) {
              value = Math.pow(value,x);
              return value;
            },
  clear: function () {
          value = 0;
          return value;
  }
};
