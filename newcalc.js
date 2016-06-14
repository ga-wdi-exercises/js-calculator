
$(document).on("ready", function() {

alert("Welcome! I am Calculatron! I can add, subtract, multiply, divide, and calculate exponents & roots.")
alert("Please use the format: calculate.###(X, Y), where ### is 'add', 'subtract', 'multiply', 'divide', \
'exponent', or 'root', and X and Y are numbers.");
alert("To use the result of one calculation in the next, you can enter 'result' instead of a number for X and/or Y.")

var result;

var calculator = {
    add: function(num1, num2) {
        result = num1 + num2;
        return result;
    },
    subtract: function(num1, num2) {
        result = num1 - num2;
        return result;
    },
    multiply: function(num1, num2) {
        result = num1 * num2;
        return result;
    },
    divide: function(num1, num2) {
        result = num1 / num2;
        return result;
    },
    exponent: function(num1, num2) {
        result = Math.pow(num1, num2);
        return result;
    },
    root: function(num1, num2) {
        result = Math.pow(num1, (1/num2));
        return result;
    },
    master: function(entry) {
        result = parseInt(entry);
        return result;
    }
}

})
