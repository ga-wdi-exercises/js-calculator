var calculator = {
  add: function(num1, num2){
    var result = num1 + num2;
    return result;
  },
  subtract: function(num1, num2){
    var result = num1 - num2;
    return result;
  },
  multiply: function(num1, num2){
    var result = num1 * num2;
    return result;
  },
  divide: function(num1, num2){
    var result = num1 / num2;
    return result;
  },
  raise: function(num1, num2){
    var result = Math.pow(num1, num2);
    return result;
  },
  average: function(num1, num2){
    var result = (num1 + num2)/2;
    return result;
  }
};
var num1 = prompt("Enter the first number");
num1 = parseInt(num1);
var num2 = prompt("Enter the second number");
num2 = parseInt(num2);

var operation = prompt("Select a)Addition, s)Subtraction, m)Multiplication, d)Division, e)Exponential and v)aVerage:");
operation = operation.toLowerCase();
switch (operation){
case "a": console.log(calculator.add(num1, num2))
break;
case "s": console.log(calculator.subtract(num1, num2))
break;
case "m": console.log(calculator.multiply(num1, num2))
break;
case "d": console.log(calculator.divide(num1, num2))
break;
case "e": console.log(calculator.raise(num1, num2))
break;
case "v": console.log(calculator.average(num1, num2))
break;
default: console.log("Not a valid entry")
break;
}
