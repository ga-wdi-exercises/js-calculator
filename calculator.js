var calculator = {

  value: 0,

  add: function (a, b) {
    if (b === undefined) {
      this.value += a
    } else {
      this.value = a + b
    }
    return this.value
  },
  subtract: function (a, b) {
    if (b === undefined) {
      this.value -= a
    } else {
      this.value = a - b
    }
    return this.value
  },
  multiply: function (a, b) {
    if (b === undefined) {
      this.value *= a
    } else {
      this.value = a*b
    }
    return this.value
  },
  divide: function (a, b) {
    if (b === undefined) {
      this.value /= a
    } else {
      this.value = a/b
    }
    return this.value
  },
  exponentiate: function (a, b) {
    if (b === undefined) {
      this.value = (Math.pow(this.value, a))
    } else {
      this.value += (Math.pow(a, b))
    }
    return this.value
  },
  sqrt: function (a) {
    this.value += Math.sqrt(a)
    return this.value
  },
  clear: function () {
    this.value = 0
  }
}
