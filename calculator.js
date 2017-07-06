console.log('My JS Calculator')

// object - calculator
var calculator = {
  value: 0,

  add: function (a, b) {
    if (b === undefined) {
      b = this.value
    }
    this.value = a + b
    return a + b
  },

  subtract: function (a, b) {
    if (b === undefined) {
      b = this.value
      this.value = b - a
    }
    return b - a
  },

  multiply: function (a, b) {
    if (b === undefined) {
      b = this.value
    }
    this.value = a * b
    return a * b
  },

  divide: function (a, b) {
    if (b === undefined) {
      b = this.value
    }
    this.value = b / a
    return this.value
  },

  exponent: function (a, b) {
    if (b === undefined) {
      b = this.value
    }
    this.value = Math.pow(b, a)
    return this.value
  },

  clear: function () {
    this.value = 0
    return this.value
  },

  modulo: function (a, b) {
    if (b === undefined) {
      b = this.value
    }
    this.value = b % a
    return this.value
  }

  // master: funtion () {
  //
  // }
}
