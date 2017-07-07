var calculator = {
  value: 0,
  add: function (a, b) {
    if (b === undefined) {
      return this.value += a
    } else {
      return this.value = a + b
    }
    return this.value
  },
  subtract: function (a, b) {
    if (b === undefined) {
      return this.value -= a
    } else {
      return this.value = a - b
    }
    return this.value
  },
  multiply: function (a, b) {
    if (b === undefined) {
      return this.value *= a
    } else {
      return this.value = a * b
    }
    return this.value
  },
  divide: function (a, b) {
    if (b === undefined) {
      return this.value /= a
    } else {
      return this.value = a / b
    }
    return this.value
  },
  exponent: function (a, b) {
    if (b === undefined) {
      return this.value **= a
    } else {
      return this.value = a ** b
    }
    return this.value
  },
  remainder: function (a, b) {
    if (b === undefined) {
      return this.value %= a
    } else {
      return this.value = a % b
    }
    return this.value
  },
  resetValue: function () {
    this.value = 0
    console.log('memory cleared')
  }
}
