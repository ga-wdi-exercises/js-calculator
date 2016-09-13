var calculator = {

	// Memory
	value: 0,

	// Clear Memory
	clear: function() {
		calculator.value = 0;
	},

	// Addition
	add: function(augend, addend) {
		return augend + addend;
	},
	add: function(addend) {
		calculator.value += addend;
		return calculator.value;
	},

	// Subtraction
	subtract: function(minuend, subtrahend) {
		return minuend - subtrahend;
	},
	subtract: function(subtrahend) {
		calculator.value -= subtrahend;
		return calculator.value;
	},

	// Multiplication
	multiply: function(multiplicand, multiplier) {
		return multiplicand * multiplier;
	},
	multiply: function(multiplier) {
		calculator.value *= multiplier;
		return calculator.value;
	},

	// Division
	divide: function(dividend, divisor) {
		return dividend / divisor;
	},
	divide: function(divisor) {
		calculator.value /= divisor;
		return calculator.value;
	},

	// Exponents
	exponentiate: function(base, exponent) {
		return base ** exponent;
	},
	exponentiate: function(exponent) {
		calculator.value **= exponent;
		return calculator.value;
	},

	// Factorial
	factorial: function(base) {
		// Error if negative number
		if (base < 0) {
			throw "Error: negative number";
		// If 0, result is 1
		} else if (base === 0) {
			return 1;
		// If 1, exit recursion
		} else if (base === 1) {
			return base;
		// Else recurse
		} else {
			console.log(base);
			return (base * calculator.factorial(base - 1));
		}
	},
	factorialCounter: 0,
	factorial2: function() {
		return calculator.factorial(calculator.value);
	}
}
