

var memory = 0
var calculator = {
add: function(a,b) {
  if (arguments.length === 1) {
    memory += a
      return memory
  } else if (arguments.length === 2) {
    memory = a + b
      return memory
  }
},
subtract: function(a,b) {
  if (arguments.length === 1) {
    memory -= a
      return memory
  } else if (arguments.length === 2) {
    memory = a - b
      return memory
  }

  },
multiply: function(a,b) {
  if (arguments.length === 1) {
    memory *= a
      return memory
  } else if (arguments.length === 2) {
    memory = a * b
      return memory
  }

  },
divide: function(a,b) {
  if (arguments.length === 1) {
    memory /= a
      return memory
  } else if (arguments.length === 2) {
    memory = a / b
      return memory
  }

  },
exponent: function(a,b) {
  if (arguments.length === 1) {
    memory = Math.pow(memory,a)
      return memory
  } else if (arguments.length === 2) {
    memory = Math.pow(a,b)
      return memory
  }

  },
modulo: function(a,b) {
  if (arguments.length === 1) {
    memory = memory % a
      return memory
  } else if (arguments.length === 2) {
    memory = a % b
      return memory
  }

},
master: function (string) {
  memory = eval(string)
  return memory
}

}
