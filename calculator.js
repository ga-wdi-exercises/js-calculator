// ### Javascript Calculator
//
// Your task is to create a Javascript object that represents a calculator.
var Calculator = {
    
    add: function(num1, num2){
      return(num1 + num2);
    },
    sub: function(num1, num2){
      return(num1 - num2);
    },
    mult: function(num1, num2){
      return(num1 * num2);
    },
    div: function(num1, num2){
      return(num1 / num2);
    },
    power: function(base, exp){
      return(Math.pow(base, exp));
    },
    sqRoot: function(num){
      return(Math.sqrt(num));
    }
}

// ### Bonus 1
//
// Give your calculator memory and allow it to persist the result of multiple operations.
// * Store this result in a `value` property.
// * Example: running `calculator.add(1,2)`, `calculator.add(3,2)` and `calculator.mutliply(5,2)` in sequence would result in a `value` of 10. In this example, the first argument for each method call represents the running value.
// * Give your calculator a `clear` method that resets `value`.
//
// ### Bonus 2
//
// Give your calculator a "master" method that can parse through a string of operations (e.g., `(2 - 1) * (5 ^ 2)`)
// * Your calculator should still have memory.
