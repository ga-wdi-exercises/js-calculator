var calculator = {
    value: 0,
    valAdd: function(result) {
        calculator.value += result;
        return result;
    },
    add: function(n1, n2) {
        return calculator.valAdd(n1 + n2);
    },
    subtract: function(n1, n2) {
        return calculator.valAdd(n1 - n2);
    },
    multiply: function(n1, n2) {
        return calculator.valAdd(n1 * n2);
    },
    divide: function(n1, n2) {
        if (n2 === 0) {
            console.log("Can't divide by zero");
            return NaN;
        }
        return calculator.valAdd(n1 / n2);
    },
    pow: function(n1, n2) {
        return calculator.valAdd(Math.pow(n1, n2));
    },
    clear: function() {
        calculator.value = 0;
    }
}

/*
// Create an assertion function to test if operations are working
function assertCalc(method, args, expect) {
  var result = calculator[method](args[0], args[1]);
    if (result !== expect) {
        console.log(method + " failed as " + result + ": expected " + expect);
    }
}

assertCalc("add", [10, 20], 30);
assertCalc("subtract", [60, 9], 51);
assertCalc("multiply", [7, 8], 56);
assertCalc("divide", [10, 0], NaN); // This fails :o ! NaN is not NaN. Weird.
assertCalc("divide", [18, 3], 6);
assertCalc("pow", [2, 6], 64);

// Test running total and clear method
calculator.clear()
calculator.add(5, 6); // returns 11
calculator.subtract(10, 4) // returns 6
calculator.pow(2, 6) // returns 64, calculator.value should now be 81 (11 + 6 + 64)
console.log(calculator.value); // 81
calculator.clear();
console.log(calculator.value); // Now 0
*/
