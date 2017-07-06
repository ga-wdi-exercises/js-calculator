console.log('My JS Calculator')

// object - calculator
var calculator = {
  value: 0,
// checks undefined in b -- sets value... resumes operation
  add: function (a, b = 0) {
    // if (b === undefined) {
    //   b = this.value
    // }
    this.value += a + b
    return this.value
  },
// similar to add, checks for undefined in b... sets value... then checks
// undefined in a && b and subtracts b - a
  subtract: function (a, b) {
    if (b === undefined) {
      b = this.value
      this.value = b - a
    } else if (a !== undefined && b !== undefined) {
      console.log(`subtracting a & b from current value of: ${this.value}`)
      this.value = this.value - a - b
    }
    return this.value
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
}
