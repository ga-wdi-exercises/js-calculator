var calculator = {
  value: 0,
  clear: function () {
    this.value = 0
  },
  add: function (addend1, addend2) {
    if (addend2 === undefined) {
      addend2 = this.value
    }

    let sum = addend1 + addend2
    this.value = sum
    return sum
  },
  subtract: function (minuend, subtrahend) {
    if (subtrahend === undefined) {
      subtrahend = minuend
      minuend = this.value
    }

    let difference = minuend - subtrahend
    this.value = difference
    return difference
  },
  multiply: function (factor1, factor2) {
    if (factor2 === undefined) {
      factor2 = this.value
    }

    let product = factor1 * factor2
    this.value = product
    return product
  },
  divide: function (dividend, divisor) {
    if (divisor === undefined) {
      divisor = dividend
      dividend = this.value
    }
    let quotient = dividend / divisor
    this.value = quotient
    return quotient
  },
  exponentiate: function (base, exponent) {
    if (exponent === undefined) {
      exponent = base
      base = this.value
    }

    let result = base ** exponent
    this.value = result
    return result
  },
  remainder: function (dividend, divisor) {
    if (divisor === undefined) {
      divisor = dividend
      dividend = this.value
    }
    let result = dividend % divisor
    this.value = result
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
