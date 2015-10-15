//Logs the result of the calculation. Updates and logs savedValue.
var setSavedValue = function(calcResult) {
  calculator.savedValue += calcResult;

  // Console output
  console.log("This evaluated to: " + calcResult);
  console.log("Saved value is: " + calculator.savedValue + ". Type calculator.clear(); to reset");
}

// Calculator Object
var calculator = {

  // Initially set to 0
  savedValue: 0,

  // Resets savedValue
  clear: function() {
    calculator.savedValue = 0;
  },

  add: function(num1, num2) {
    var answer = num1 + num2;
    setSavedValue(answer);
  },

  subtract: function(num1, num2) {
    var answer = num1 - num2;
    setSavedValue(answer);
  },

  multiply: function(num1, num2) {
    var answer = num1 * num2;
    setSavedValue(answer);
  },

  divide: function(num1, num2) {
    var answer = num1 / num2;
    setSavedValue(answer);
  },

  exponent: function(num1, exp) {
    var answer = Math.pow(num1, exp);
    setSavedValue(answer);
  },

  squareRoot: function(num1) {
    var answer =  Math.sqrt(num1);
    setSavedValue(answer);
  }
}
