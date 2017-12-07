var calculator = {
  add: (num1, num2) => {
    return num1 + num2
  },
  subtract: (num1, num2) => {
    return num1 - num2
  },
  multiply: (num1, num2) => {
    return num1 * num2
  },
  divide: (num1, num2) => {
    return num1 / num2
  },
  exponentiate: (num1, num2) => {
    return num1 ** num2
  },
  remainder: (num1, num2) => {
    return num1 % num2
  }
}

// to get rid of Standard JS error that calculator is assigned a value but never used
console.log(calculator)
