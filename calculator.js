// Create keys variable, stores all calculator span tags
const keys = document.querySelectorAll("#calculator span");

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

// Create switch statement for operations in calculator object
const operations = function(input, operator, numArr){
    switch (operator) {
      case "+":
        input.innerHTML = calculator.add(numArr[0],numArr[1]);
        break;
      case "-":
        input.innerHTML = calculator.sub(numArr[0],numArr[1]);
        break;
      case "*":
        input.innerHTML = calculator.multi(numArr[0],numArr[1]);
        break;
      case "/":
        input.innerHTML = calculator.divi(numArr[0],numArr[1]);
        break;
      case "x":
        input.innerHTML = calculator.expo(numArr[0],numArr[1]);
        break;
      default:

    }
}


for(let i = 0; i < keys.length; i++){
  keys[i].onclick = function(e){
    // Select .screen element and set to input
    let input = document.querySelector(".screen");
    //let inputVal = input.innerHTML;
    // Set keys click value to btnVal variable
    let btnVal = this.innerHTML;
    // Append btnVal value to input html


    if (btnVal === "C"){
      input.innerHTML = "";
    }
    else if (btnVal === "=") {
      let screenShot = input.innerHTML;
      console.log(screenShot);
      let arr = screenShot.split("");
      
      let numArr = [parseInt(arr[0]), parseInt(arr[2])];
      let operator = arr[1];
      console.log(numArr);
      operations(input, operator, numArr);
    }
    else {
      input.innerHTML += btnVal;
    }
  };
}
