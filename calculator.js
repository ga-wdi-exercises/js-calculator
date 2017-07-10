var memory = 0
var calculator = {
plus: function(a,b) {
  if (arguments.length === 1) {
    memory += a
      return memory
  } else if (arguments.length === 2) {
    memory = a + b
      return memory
  }
},
minus: function(a,b) {
  if (arguments.length === 1) {
    memory -= a
      return memory
  } else if (arguments.length === 2) {
    memory = a - b
      return memory
  }

  },
times: function(a,b) {
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
modular: function(a,b) {
  if (arguments.length === 1) {
    memory = memory % a
      return memory
  } else if (arguments.length === 2) {
    memory = a % b
      return memory
  }

},
