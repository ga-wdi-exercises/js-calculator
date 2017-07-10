console.log('You are connnected')

var calculator = {
  value: 0,
  persistantvalue: 0,

  add: function (a, b) {
    if (b === undefined) {
      this.value += a
    }  else {
      this.value = (a + b)}
      return this.value = (a + b)
  },

  Subtract: function (a, b) {
    if (b === undefined) {
      this.value -= a
    } else {
      this.value = (a - b) }
      return this.value = (a - b)
    },

  multiplication: function (a, b) {
    if (b === undefined) {
      this.value *= a
    } else {
      this.value = (a * b)}
      return this.value = (a * b)
  },

  division: function (a, b) {
    if (b === undefined) {
      this.value /= a
    } else {
    this.value(a / b)
    }
   return this.value(a / b)
  },

  exponentiate: function (a, b) {
    if (b === undefined){
      this.value (Math.pow(this.value, a))
    } else {
    this.value += (Math.pow(a, b))
} return  this.value(Math.pow(a, b))
  },


  Modulus: function (a, b) {
    if (b === undefined) {
      this.value %= a
    } else {
      this.value(a % b)
    }
      return this.value(a % b)
  },
  clear: function (){
  this.persistantvalue = 0
}
}
