//Calculator!
var calc = {
    add: function(num1, num2) {
        return num1 + num2},
    subtract: function(num1, num2) {
        return num1 - num2},
    multiply: function(num1, num2) {
        return num1 * num2},
    division: function(num1, num2) {
        return num1/num2},
    exponent: function(num1, num2) {
        return Math.pow(num1, num2)},
    squareRoot: function(num1) {
        return Math.sqrt(num1)}
}

//run/test functions below:
calc.squareRoot(144)
