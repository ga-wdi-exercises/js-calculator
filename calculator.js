
var y
var value = 0
var calculator = {
  add: function (y) {
    value = value + y
    return value
  },
  subtract: function (y) {
    value = value - y
    return value
  },
  multiply: function (y) {
    value = value * y
    return value
  },
  divide: function (y) {
    value = value / y
    return value
  },
  remainder: function (y) {
    value = value % y
    return value
  },
  exponent: function (y) {
    value = Math.pow(value, y)
    return value
  },
  master: function (y) {
    value = y
    return value
  },
  clear: function () {
    value = 0
    return value
  }
}
