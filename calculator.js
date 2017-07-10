var calculator = {
}

fn = prompt('Math Operator')

if(fn === '*') {
var  multiplification = {
  num1: {},
  num2: {},
  multiply: function () {
    alert(this.num1 * this.num2)
  }
}
multiplification.num1 = prompt()
multiplification.num2 = prompt()
multiplification.multiply()

} else if (fn === '/') {
var  division = {
  num1: {},
  num2: {},
  div: function () {
    alert(this.num1 / this.num2)
  }
}
division.num1 = prompt()
division.num2 = prompt()
division.div()

} else if (fn === '-'){
var  substraction = {
  num1: {},
  num2: {},
  sub: function () {
    alert(this.num1 - this.num2)
  }
}
substraction.num1 = prompt()
substraction.num2 = prompt()
substraction.sub()

} else if (fn === 'pow') {
var  exponent = {
  num1: {},
  num2: {},
  exp: function () {
    alert(Math.pow(this.num1, this.num2))
  }
}
exponent.num1 = prompt()
exponent.num2 = prompt()
exponent.exp()

} else if (fn === 'sqr') {
var  square = {
  num1: {},
  sqr: function () {
    alert (Math.sqrt(this.num1))
  }
}
square.num1 = prompt()
square.sqr()

} else if (fn == '+') {
  var addition = {
    sum: function () {
      var num1 = {}
      var num2 = {}
    alert(num1 + num2)
  }
}
  addition.num1 = prompt()
  addition.num2 = prompt()
  addition.sum()
} else {
  alert ('This is not a math operator')
}
