var value = []
var calculator = {
  add (a, b) {
    value.push(a + b)
    return a + b
  },
  subtract (a, b) {
    value.push(a - b)
    return a - b
  },
  multiply (a, b) {
    value.push(a * b)
    return a * b
  },
  divide (a, b) {
    value.push(a / b)
    return a / b
  },
  power (a, b) {
    value.push(a ** b)
    return a ** b
  },
  root (a, b) {
    value.push(a ** (1 / b))
    return a ** (1 / b)
  },
  clear () {
    return value = []
  }
}

console.log(calculator.add(3, 4))
console.log(calculator.subtract(3, 4))
console.log(calculator.multiply(3, 4))
console.log(calculator.divide(3, 4))
console.log(calculator.power(3, 4))
console.log(calculator.root(3, 4))
