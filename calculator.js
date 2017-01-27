var calculator = {
  value: 0,
  add: function(firstNumber,secondNumber) {
    if(secondNumber==null) {
      calculator.value = calculator.value + firstNumber;
    } else {
      calculator.value = firstNumber + secondNumber;
    }
    return calculator.value;
  },

  subtract: function(firstNumber,secondNumber) {
    if(secondNumber==null) {
      calculator.value = calculator.value - firstNumber;
    } else {
      calculator.value = firstNumber - secondNumber;
    }
    return calculator.value;
  },

  multiply: function(firstNumber,secondNumber) {
    if(secondNumber==null) {
      calculator.value = calculator.value * firstNumber;
    } else if(firstNumber == 0 || secondNumber == 0){
      calculator.value = 0;
    } else {
      calculator.value = firstNumber * secondNumber;
    }
    return calculator.value;
  },
  divideBy: function(firstNumber,secondNumber) {
    if(secondNumber==0) {
      calculator.value = 0;
      console.log("You can't divide by 0");
      return "NaN";
    } else if (secondNumber==null && firstNumber ==0){
      calculator.value = 0;
      console.log("You can't divide by 0");
      return "NaN";
    } else if(secondNumber==null) {
      calculator.value = calculator.value / firstNumber;
    } else {
      calculator.value = firstNumber / secondNumber;
    }
    return calculator.value;
  },
  exponent: function(firstNumber,secondNumber) {
    if(secondNumber==null) {
      calculator.value = Math.pow(calculator.value,firstNumber);
    } else {
      calculator.value = Math.pow(firstNumber, secondNumber);
    }
    return calculator.value;
  },

  factorial: function(firstNumber) {
    var holderNumber = 0;
    var memHolderNumber=calculator.value;
    if(firstNumber == null){
      holderNumber = calculator.value;
      calculator.value=1;
      for(i=0;i<memHolderNumber;i++) {
        calculator.value = holderNumber*calculator.value;
        holderNumber=holderNumber-1;
      }

    } else {
      holderNumber = firstNumber;
      calculator.value = 1
      for (i=0;i<firstNumber;i++) {
        calculator.value = holderNumber*calculator.value;
        holderNumber=holderNumber-1;
      }
    }
    return calculator.value;
  },

  clear: function(){
    calculator.value = 0;
    return "Memory of previous operation has been cleared to " + calculator.value;
  }
}
