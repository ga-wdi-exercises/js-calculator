var calculator = {
  memory: 0,
  clearMemory: function () {
    this.memory = 0
  },
  add: function (addend1, addend2) {
    let sum = addend1 + addend2
    this.memory = sum
    return sum
  },
  subtract: function (minuend, subtrahend) {
    let difference = minuend - subtrahend
    this.memory = difference
    return difference
  },
  multiply: function (factor1, factor2) {
    let product = factor1 * factor2
    this.memory = product
    return product
  },
  divide: function (dividend, divisor) {
    let quotient = dividend / divisor
    this.memory = quotient
    return quotient
  },
  exponentiate: function (base, exponent) {
    let result = base ** exponent
    this.memory = result
    return result
  },
  remainder: function (dividend, divisor) {
    let result = dividend % divisor
    this.memory = result
    return result
  }
}

// to get rid of Standard JS error that calculator is assigned a value but never used
console.log(calculator)

/* sources:
names of part of arithmetic equations:
https://www.montereyinstitute.org/courses/DevelopmentalMath/TEXTGROUP-1-8_RESOURCE/U01_L5_T1_text_final.html

names of parts of exponential equations:
https://math.stackexchange.com/a/799800
*/
