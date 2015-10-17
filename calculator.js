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
  circumference: function(num1) {
    console.log( (Math.PI * (num1 * num1));
  }

};

console.log("To use this calculator: call calculator.add(num1, num2) or .subtract, .multiply, .division, or .powerX, or find the circumference of a circle by using .circumference(num)");
