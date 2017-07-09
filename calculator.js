var calculator = {
  value: 0,
    add: function (num1, num2 = null) {
      this.value += num1 + num2
      return num1 + num2
    },
    subtract: function (num1, num2 = null) {
      this.value -= (num1 - num2)
      return num1 - num2
    },
    multiply: function (num1, num2 = null) {
      this.value = this.value * (num1 * num2)
      return num1 * num2
    },
    divide: function (num1, num2 = 1) {
      this.value = this.value / (num1 / num2)
      return num1 / num2
    },
    exponent: function (num1, num2 = 1) {
      this.value =  Math.pow(this.value, (Math.pow(num1, num2)))
      return Math.pow(num1, num2)
    },
    random: function (num1, num2) {
      this.value = Math.floor((Math.random() * num2) + num1)
      return Math.floor((Math.random() * num2) + num1)
    },
    clear: (function () {
      this.value = 0
      return this.value
    })()
}
