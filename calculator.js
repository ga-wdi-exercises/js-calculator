var calculator = {
  result: 0,
  lastResult: 0,
  start: function (x) {
    this.result = x
  },
  getResult () {
    return this.result
  },
  master: function (expr) {
    var split = expr.split('*')
    console.log(split)
    this.lastResult = eval(expr)
    return this.lastResult
  },
  add: function (x, y = null) {
    if (y === null) {
      this.result += x
      return this.result
    } else {
      return x + y
    }
  },
  subtract: function (x, y = null) {
    if (y === null) {
      this.result -= x
      return this.result
    } else {
      return x - y
    }
  },
  multiply: function (x, y = null) {
    if (y === null) {
      this.result *= x
      return this.result
    } else {
      return x * y
    }
  },
  divide: function (x, y = null) {
    if (y === null) {
      this.result /= x
      return this.result
    } else {
      return x / y
    }
  },
  exponentiate: function (x, y = null) {
    if (y === null) {
      this.result = Math.pow(this.result, x)
      return this.result
    } else {
      return Math.pow(x, y)
    }
  },
  mod: function (x, y = null) {
    if (y === null) {
      this.result %= x
      return this.result
    } else {
      return x % y
    }
  }
}
