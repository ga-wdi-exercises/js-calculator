// Ti-83 calculator
calculator = {
  // function that adds two numbers together
  adding: function( a, b ) {
    // If only one parameter is passed, add that parameter to the saved added value, value defaults as 0
    if ( typeof b === 'undefined') {
      b = lastCalculatorValueStored.lastAddValue;
    };
    // Store most recent value
    lastCalculatorValueStored["lastAddValue"] = a + b;
    return a + b;
  },

  subtrack: function(a, b) {
    // If only one parameter is passed, subtrack that parameter from saved subtracked value, saved value defaults as 0
    if ( typeof b === 'undefined') {
      b = a;
      // Get most recent value
      a = lastCalculatorValueStored.lastSubValue;
    };
    // Store most recent value
    lastCalculatorValueStored["lastSubValue"] = a - b;
    return a - b;
  },
  multiply: function(a, b) {
    // If only one parameter is passed, multiply that parameter from saved value from most recent multiplication, saved value defaults as 0
    if ( typeof b === 'undefined') {
      b = lastCalculatorValueStored.lastMultipliedValue;
    };
    answer = 0;
    // multiplication loop
    for (i = 0; i < b; i++) {
      answer += a;
    };
    // Store most recent value
    lastCalculatorValueStored["lastMultipliedValue"] = answer;
     return answer;
  },
  // divide
  div: function(a, b) {
    // If only one parameter is passed, divide last saved value from past parameter, saved value defaults as 0
    if ( typeof b === 'undefined') {
      b = a//
      a = lastCalculatorValueStored.lastDividedValue;
    }
    // Store most recent value
    lastCalculatorValueStored['lastDividedValue'] = a / b;
    return a / b;
  },
  power: function(a, power) {
    var answer = 1;
    // If only one parameter is passed, it will square that parameter
    // Storing the value here seems silly
    // I realize i could just have it equal 2 but the exercise is to use objects
    if (typeof power === 'undefined'){
      power = lastCalculatorValueStored.squaredPower;
    };
    if (power === 0) {
      answer = 1;
      return answer;
    };
    for (i = 0; i < power; i++) {
      answer *= a;
    };
    return answer;
  },
  // adds one to a
  plusPlus: function(a) {
    // if no parameter is give, use the most stored value from most recent call as a and add one to that.
    if (typeof a === 'undefined'){
      a = lastCalculatorValueStored.lastplusPlusValue;
    };
    lastCalculatorValueStored["lastplusPlusValue"] = a + 1;
    return a + 1;
  }
}

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
  // Store the last plusPlus value
  lastplusPlusValue: 0,
  // Squared power if no power is given
  squaredPower: 2
};

// Logs out all the options in the calculator
function calculatorOptions() {
  console.log(Object.keys(calculator));
};
// Logs out all the stored values
 function valuesStored() {
  for ( var keys in lastCalculatorValueStored) {
    var value = lastCalculatorValueStored[keys];
    if (lastCalculatorValueStored[keys] === value) {
      var key = keys;
      console.log(key + ": " + value);
    };
  };
};

function clearValue() {
  var value;
  for (var key in lastCalculatorValueStored) {
    if (key === 'squaredPower') {
      lastCalculatorValueStored[key] = 2;
    } else {
      lastCalculatorValueStored[key] = 0;
    };
  };
};

console.log("For calculator options, Please run calculatorOptions()")
console.log("To see values stored for most recent operations, Please run valuesStored(). Default values are 0, except power defaults to squared if no power if give.")
console.log("If you would like to clear all saved values please run clearValue()")