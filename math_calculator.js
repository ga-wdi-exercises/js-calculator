calculator = {
  // function that adds two numbers together
  adding: function( a, b ) {
    // If only one parameter is passed, add that parameter to the last added value, value defaults as 0
    if ( typeof b === 'undefined') {
      b = lastCalculatorValueStored.lastAddValue;
    };
    lastCalculatorValueStored["lastAddValue"] = a + b;
    return a + b;
  },

  subtrack: function(a, b) {
    if ( typeof b === 'undefined') {
      b = a;
      a = lastCalculatorValueStored.lastSubValue;
    };
    lastCalculatorValueStored["lastSubValue"] = a - b;
    return a - b;
  },
  multiply: function(a, b) {
    if ( typeof b === 'undefined') {
      b = lastCalculatorValueStored.lastMultipliedValue;
    };
    answer = 0;
    for (i = 0; i < b; i++) {
      answer += a;
    };
    lastCalculatorValueStored["lastMultipliedValue"] = answer;
     return answer;
  },
  div: function(a, b) {
    return a / b;
  },
  power: function(a, power) {
    // I realize i could just have it equal 2 but the exercise is to use objects
    var answer = 1;
    if (typeof power === 'undefined'){
      power = lastCalculatorValueStored.lastPowerValue;
    }
    else if (power === 0) {
      answer = 1;
      return answer;
    };
    for (i = 0; i < power; i++) {
      answer *= a;
    };
    return answer;
  },
  plusPlus: function(a) {
    if (a === 'undefined'){
      a = lastCalculatorValueStored.lastplusPlusValue;
    };
    lastCalculatorValueStored["lastplusPlusValue"] = a + 1;
    return a + 1;
  }
};

// Store all the most recent values for the calculator operations, default vaules are zero
lastCalculatorValueStored = {
  // Store the last added value
  lastAddValue: 0,
  // Store the last subtracked value
  lastSubValue: 0,
  // Store the last multiplied value
  lastMultipliedValue: 0,
  // Store the last divided value
  lastDividedValue: 0,
  // If no power if give, power squares the number
  lastPowerValue: 2,
  // Store the last plusPlus value
  lastplusPlusValue: 0,
};

// Logs out all the options in the calculator
calculatorOptions = function() {
  console.log(Object.keys(calculator));
};
// Logs out all the stored values
valuesStored = function() {
  for ( var keys in lastCalculatorValueStored) {
    var value = lastCalculatorValueStored[keys];
    if (lastCalculatorValueStored[keys] === value) {
      var key = keys;
      console.log(key + ": " + value);
    }
  };
}

console.log("For calculator options, Please run calculatorOption()")
console.log("To see values stored for most recent operations, Please run valuesStored(). Default values are 0, except power defaults to squared if no power if give.")