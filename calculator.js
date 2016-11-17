// Create an object
let calculator = {
  // Addition
  add: function(a, b) {
    return a + b;
  },
  // Subtraction
  sub: function(a, b) {
    return a - b;
  },
  // Multiplication
  multi: function(a, b) {
    return a * b;
  },
  // Division
  divi: function(a, b) {
    return a / b;
  },
  // Exponents (Hint: Look up Javascript's Math object)
  expo: function(a, b) {
    return Math.pow(a, b);
  },
  // An operation of your choice!

};

// Create keys variable, stores all calculator span tags
const keys = document.querySelectorAll("#calculator span");


for(let i = 0; i < keys.length; i++){
  keys[i].onclick = function(e){
    // Select .screen element and set to input
    let input = document.querySelector(".screen");
    //let inputVal = input.innerHTML;
    // Set keys click value to btnVal variable
    let btnVal = this.innerHTML;
    // Append btnVal value to input html
    input.innerHTML += btnVal;

    // switch (expression) {
    //   case expression:
    //
    //     break;
    //   default:
    //
    // }
  };
}
