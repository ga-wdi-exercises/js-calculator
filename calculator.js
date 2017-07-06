// GOAL 1

// var calculator = {
//   add (a, b) {
//     return sum
//   },
//   subtract (a, b) {
//     return a - b
//   },
//   multiply (a, b) {
//     return a * b
//   },
//   divide (a, b) {
//     return a / b
//   },
//   exponent (a, b) {
//     return a ** b
//   },
//   modulus (a, b) {
//     a % b
//   }
// }

// BONUS 1

var calculator = {
  value: 0,
  add (a) {
    this.value += a
    return this.value
  },
  subtract (a) {
    this.value -= a
    return this.value
  },
  multiply (a) {
    this.value *= a
    return this.value
  },
  divide (a) {
    this.value /= a
    return this.value
  },
  exponent (a) {
    this.value = this.value ** a
    return this.value
  },
  clear () {
    this.value = 0
    return this.value
  }
}
