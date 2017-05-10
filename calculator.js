var calculator = {
  add: function(num1, num2){
    if (num2 === undefined) {
    results = num1 + results
  } else {
    results = num1 + num2
  }
    console.log(results)
    return results
  },
  subtract: function(num1, num2){
    if (num2 === undefined) {
    results = results - num1
  } else {
    results = num2 - num1
  }
    console.log(results)
    return results
  },
  multiply: function(num1, num2){
    if (num2 === undefined) {
      results = results * num1
    } else {
      results = num2 * num1
    }
    console.log(results)
    return results
  },
  divide: function(num1, num2){
    if (num2 === undefined) {
      results = results / num1
    } else {
      results = num1 / num2
    }
    console.log(results)
    return results
  },
  exponent: function(base, power){
    if (power === undefined) {
      results = results ** base
    } else {
      results = base ** power
    }
    console.log(results)
    return results
  },
  squareRoot: function(num){
    if (num === undefined) {
      results = Math.sqrt(results)
    } else {
      results = Math.sqrt(num)
    }
    console.log(results)
    return results
  }
}
