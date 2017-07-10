var calculator = {
  value: 0,
  add: function (a) {
    this.value = this.value + a
    return this.value
  },
  sub: function (a) {
    this.value = this.value - a
    return this.value
  },
  multi: function (a, b) {
    this.value = a * b
    return this.value
  },
  division: function (a, b) {
    this.value = a / b
    return this.value
  },
  expo: function (a, b) {
    this.value = Math.pow(a, b)
    return this.value
  },
  sqrt: function (a) {
    this.value = Math.sqrt(a)
    return this.value
  }

}
