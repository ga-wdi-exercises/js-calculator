// var calculator = function ({
// var calculator {}
var calculator = {

  add: function (num1, num2){
    console.log("Your addition answer is: ");
    var results = num1 + num2;
    return results;
  },

  subtract: function (num1, num2){
    console.log("Your subtraction answer is: ");
    var results = num1 - num2;
    return results;
  },

  multiply: function (num1, num2){
    console.log("Your multplication answer is: ");
    var results = num1 * num2;
    return results;
  },

  division: function (num1, num2){
    console.log("Your division answer is: ");
    var results = num1 / num2;
    return num1 / num2;
  },

  exponents: function (num1, num2){
    var results = Math.pow(num1,num2);
    console.log("Your exponents answer is: ");
    return results;
  },

  randomOp: function (num1, num2){
    var results = (num1 - num2) * (num1 ^ num2);
    console.log("Your randomOp answer is: ");
    return results;

  }
}
/* Random Switch Cases for later use */

//   switch(Calculator) {
//
//   case "add":
//     console.log("Your addition answer is: ");
//     break;
//
//   case "subtract":
//     console.log("Your subtraction answer is: ");
//     break;
//
//   case "divide":
//     console.log("Your division answer is: ");
//     break;
//
//   case "multiply":
//     console.log("Your multplication answer is: ");
//     break;
//
//   case "exponents":
//     console.log("Your exponents answer is: ");
//     break;
//
//   case "randomOp":
//     console.log("Your randomOp answer is: ");
//     break;
//
// }
