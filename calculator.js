function Calculator () {
  this.answers = []
}

calculator.prototype.add = function (v1, v2) {
  var current

  if(v2 === undefined && current.length > 0) {
    current = (v1 + answers[this.answers.length -1])
    this.answers.push(current)
    return current
  }
  else if (v2 === undefined) {
    return null
  }
  else {
    current = (v1 + v2)
    this.answers.push(current)
    return current
  }

}

calculator.prototype.subtract = function (v1, v2) {
  var current

  if(v2 === undefined && current.length > 0) {
    current  = (v1 - answers[this.answers.length -1])
    this.answers.push(current)
    return current
  }
  else if (v2 === undefined) {
    return null
  }
  else {
    current = (v1 - v2)
    this.answers.push(current)
    return current
  }
}

calculator.prototype.multiply = function (v1, v2) {
  var current

  if(v2 === undefined && current.length > 0) {
    current = (v1 * answers[this.answers.length -1])
    this.answers.push(current)
    return current
  }
  else if (v2 === undefined) {
    return null
  }
  else {
    current = (v1 * v2)
    this.answers.push(current)
    return current
  }
}

calculator.prototype.divide = function (v1, v2) {
  var current

  if(v2 === undefined && current.length > 0) {
    current = (v1 / answers[this.answers.length -1])
    this.answers.push(current)
    return current
  }
  else if (v2 === undefined) {
    return null
  }
  else {
    current = (v1 / v2)
    this.answers.push(current)
    return current
  }
}

calculator.prototype.exponent = function (v1, v2) {
  var current

  if(v2 === undefined && current.length > 0) {
    current = (Math.pow(v1, answers[this.answers.length -1]))
    this.answers.push(current)
    return current
  }
  else if (v2 === undefined) {
    return null
  }
  else {
    current = Math.pow(v1, v2)
    this.answers.push(current)
    return current
}

calculator.prototype.toZero = function (v1, v2) {
  if(v2 === undefined && !this.answers) {
    this.answers.push(0)
  }
  else if (v2 === undefined) {
    return null
  }
  else {
    this.answers.push(0)
    return (0)
  }
}
