
var y
var value = 0
var calculator = {
  add: function (y, x) {
    if (x === undefined) {
      value = value + y
    } else {
      value = y + x
    }
    changeText()
    return value
  },
  subtract: function (y, x) {
    if (x === undefined) {
      value = value - y
    } else {
      value = y - x
    }
    changeText()
    return value
  },
  multiply: function (y, x) {
    if (x === undefined) {
      value = value * y
    } else {
      value = y * x
    }
    changeText()
    return value
  },
  divide: function (y, x) {
    if (x === undefined) {
      value = value / y
    } else {
      value = y / x
    }
    changeText()
    return value
  },
  remainder: function (y, x) {
    if (x === undefined) {
      value = value % y
    } else {
      value = y % x
    }
    changeText()
    return value
  },
  exponentiate: function (y, x) {
    if (x === undefined) {
      value = Math.pow(value, y)
    } else {
      value = Math.pow(y, x)
    }
    changeText()
    return value
  },
  master: function (y) {
    value = y
    changeText()
    return value
  },
  clear: function () {
    value = 0
    changeText()
    return value
  }
}

function changeText () {
  document.getElementById('calc').innerHTML = `${value}`
}
