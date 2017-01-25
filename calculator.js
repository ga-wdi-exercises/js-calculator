const calculator = {
  currentNumber: 0, //initialize currentNumber at 0
  add(x, y) {
    if (y) { calculator.clear(); }
    calculator.currentNumber = x && y ? x + y : calculator.currentNumber + x;
    return "Addition operation successful. Current number is " + calculator.currentNumber;
  },
  subtract(x, y) {
    if (y) { calculator.clear(); }
    calculator.currentNumber = x && y ? x - y : calculator.currentNumber - x;
    return "Subtraction operation successful. Current number is " + calculator.currentNumber;
  },
  multiply(x, y) {
    if (y) { calculator.clear(); }
    calculator.currentNumber = x && y ? x * y : calculator.currentNumber * x;
    return "Multiplication operation successful. Current number is " + calculator.currentNumber;
  },
  divide(x, y) {
    if (y) { calculator.clear(); }
    calculator.currentNumber = x && y ? x / y : calculator.currentNumber / x;
    return "Division operation successful. Current number is " + calculator.currentNumber;
  },
  modulo(x, y) {
    if (y) { calculator.clear(); }
    calculator.currentNumber = x && y ? x % y : calculator.currentNumber % x;
    return "Modulo operation successful. Current number is " + calculator.currentNumber;
  },
  exponent(x, n) {
    if (n) {
      calculator.clear();
      calculator.currentNumber = Math.pow(x, n);
    } else {
      calculator.currentNumber = Math.pow(calculator.currentNumber, x);
    }
    return "Exponent operation successful. Current number is " + calculator.currentNumber;
  },
  clear() {
    calculator.currentNumber = 0; //set the currentNumber to 0
    return "Memory cleared. Current number is 0.";
  },
  master(expression) {
    calculator.clear();
    return eval(expression);
  }
}
