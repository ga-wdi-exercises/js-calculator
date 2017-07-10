var value = null
var calculator = {
  add (a, b) {
    if (b === undefined) {
      let answer = value + a
      value = answer
      return answer
    } else {
      value = a + b
      return a + b
    }
  },
  subtract (a, b) {
    if (b === undefined) {
      let answer = value - a
      value = answer
      return answer
    } else {
      value = a - b
      return a - b
    }
  },
  multiply (a, b) {
    if (b === undefined) {
      let answer = value * a
      value = answer
      return answer
    } else {
      value = a * b
      return a * b
    }
  },
  divide (a, b) {
    if (b === undefined) {
      let answer = value / a
      value = answer
      return answer
    } else {
      value = a / b
      return a / b
    }
  },
  power (a, b) {
    if (b === undefined) {
      let answer = value ** a
      value = answer
      return answer
    } else {
      value = a ** b
      return a ** b
    }
  },
  root (a, b) {
    if (b === undefined) {
      let answer = value ** (1 / a)
      value = answer
      return answer
    } else {
      value = a ** (1 / b)
      return a ** (1 / b)
    }
  },
  clear () {
    value = null
    return 'Memory cleared.'
  }
}

console.log(calculator.add(3, 4))
console.log(calculator.subtract(3, 4))
console.log(calculator.multiply(3, 4))
console.log(calculator.divide(3, 4))
console.log(calculator.power(3, 4))
console.log(calculator.root(3, 4))
