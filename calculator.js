

var value = []
var clear = []

function reset(){value = clear}

var calc = {
  // value1: this.value1,
  // value2: this.value2,
  add: function(value1, value2) {
    var addition = value1 + value2;
    console.log(addition);
    value.push(addition)
  },
  subtract: function(value1, value2) {
    var subtraction = value1 - value2
    console.log(subtraction)
    value.push(subtraction)
  },

  multiply: function(value1, value2) {
    var multiplication = value1 * value2
    console.log(multiplication)
    value.push(multiplication)
  },

  divide: function(value1, value2) {
    var division = value1 / value2
    console.log(division)
    value.push(division)
  },
  expon: function(value1, value2) {
    var exponents = Math.pow(value1,value2)
    console.log(exponents)
    value.push(exponents)
  },
}
