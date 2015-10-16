var calculator = {
  add: function(num1,num2) {
    console.log( num1 + num2);
  },
  subtract: function(num1,num2) {
    console.log( num1 - num2);
  },
  multiply: function(num1,num2) {
    console.log( num1 * num2);
  },
  division: function(num1,num2) {
    console.log( num1 / num2);
  },
  powerX: function(num1,num2) {
    console.log( Math.pow(num1,num2));
  },

// given 2 and 4, 2 to the power of 4. 2 * 2 * 2 * 2. 4(2 * 2)

};

console.log("To use this calculator: call calculator.add(num1, num2) or .subtract, .multiply, .division, or .powerX");
