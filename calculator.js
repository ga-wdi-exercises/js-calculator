
var y
var value = 0
var calculator = {
  add: function (y) {
    value = value + y
    changeText()
    return value
  },
  subtract: function (y) {
    value = value - y
    changeText()
    return value
  },
  multiply: function (y) {
    value = value * y
    changeText()
    return value
  },
  divide: function (y) {
    value = value / y
    changeText()
    return value
  },
  remainder: function (y) {
    value = value % y
    changeText()
    return value
  },
  exponent: function (y) {
    value = Math.pow(value, y)
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
