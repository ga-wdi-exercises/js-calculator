var calculator = {
  result: 0,
  add: function() {
    calculator.result = arguments[0];
    for (let i=1; i < 2; i++) {
      calculator.result += arguments[i];
    }
  return calculator.result;
},
  subtract: function() {
    calculator.result = arguments[0];
    for (let i=1; i<2; i++) {
      calculator.result -= arguments[i];
    }
    return calculator.result;
},
multiply: function() {
  calculator.result = arguments[0];
  for (let i=1; i<2; i++) {
    calculator.result *= arguments[i];
  }
  return calculator.result;
},
divide: function() {
  if (arguments[1] == "0") {
    // console.log("wer are here");
    calculator.result="Cannot divide by zero!";
    return calculator.result;
  }
  calculator.result = arguments[0];
  for (let i=1; i<2; i++) {
    calculator.result /= arguments[i];
  }
  return calculator.result;
},
power: function() {
  calculator.result = arguments[0];
  for (let i=1; i<2; i++) {
    calculator.result = Math.pow(calculator.result, arguments[i]);
  }
  return calculator.result;
},
rounddivide: function() {
  if (arguments[1] == "0") {
    // console.log("wer are here");
    calculator.result="Cannot divide by zero!";
    return calculator.result;
  }
  calculator.result = arguments[0];
  for (let i=1; i<2; i++) {
    // calculator.result /= arguments[i];
    // calculator.result = Math.round(calculator.result);
    calculator.result = Math.round(calculator.result/arguments[i]);
  }
  return calculator.result;
},
};
