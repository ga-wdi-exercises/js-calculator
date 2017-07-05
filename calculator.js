var value = 0
var calculator = {
  add: function (a, b) {
    if (b === undefined) {
    // if (a && b) {
      return (value += a)
    } else {
      return (a + b)
    }
  },
  subtract: function (a, b) {
    if (b === undefined) {
      return (value -= a)
    }
    return (a - b)
  },
  multiply: function (a, b) {
    if (b === undefined) {
      return (value *= a)
    }
    return (a * b)
  },
  divide: function (a, b) {
    if (b === undefined) {
      return (value /= a)
    }
    return (a / b)
  },
  exponent: function (a, b) {
    if (b === undefined) {
      return Math.pow(value, a)
    }
    return Math.pow(a, a)
  },
  module: function (a, b) {
    if (b === undefined) {
      return (0)
    }
    return (a % b)
  },
  clear: function () {
    return (value = 0)
  },
  master: function (x) {
    x = x.replace('^', '**')
    return eval(x)
  }
}
