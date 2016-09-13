var calculator = {

	// Memory
	value: 0,

	// Clear Memory
	clear: function() {
		calculator.value = 0;
		return 0;
	},

	// Addition
	add: function() {
		// If 0 arguments
		if (arguments.length === 0) {
			return calculator.value;

		// If 1 arguments
		} else if (arguments.length === 1) {
			calculator.value += arguments[0];
			return calculator.value;

		// If 2 arguments
		} else if (arguments.length === 2) {
			return arguments[0] + arguments[1];
		} else {
			throw "Error: Bad Number of Arguments";
		}
	},

	// Subtraction
	subtract: function() {
		// If 0 arguments
		if (arguments.length === 0) {
			return calculator.value;

		// If 1 arguments
		} else if (arguments.length === 1) {
			calculator.value -= arguments[0];
			return calculator.value;

		// If 2 arguments
		} else if (arguments.length === 2) {
			return arguments[0] - arguments[1];
		} else {
			throw "Error: Bad Number of Arguments";
		}
	},

	// Multiplication
	multiply: function() {
		// If 0 arguments
		if (arguments.length === 0) {
			return calculator.value;

		// If 1 arguments
		} else if (arguments.length === 1) {
			calculator.value *= arguments[0];
			return calculator.value;

		// If 2 arguments
		} else if (arguments.length === 2) {
			return arguments[0] * arguments[1];
		} else {
			throw "Error: Bad Number of Arguments";
		}
	},

	// Division
	divide: function() {
		// If 0 arguments
		if (arguments.length === 0) {
			return calculator.value;

		// If 1 arguments
		} else if (arguments.length === 1) {
			calculator.value /= arguments[0];
			return calculator.value;

		// If 2 arguments
		} else if (arguments.length === 2) {
			return arguments[0] / arguments[1];
		} else {
			throw "Error: Bad Number of Arguments";
		}
	},

	// Exponents
	exponentiate: function() {
		// If 0 arguments
		if (arguments.length === 0) {
			return calculator.value;

		// If 1 arguments
		} else if (arguments.length === 1) {
			calculator.value **= arguments[0];
			return calculator.value;

		// If 2 arguments
		} else if (arguments.length === 2) {
			return arguments[0] ** arguments[1];

		} else {
			throw "Error: Bad Number of Arguments";
		}
	},

	// Factorial
	factorial: function(base) {
		// If 0 arguments
		if (arguments.length === 0) {
			return calculator.factorial(calculator.value);

		// If 1 arguments
		} else if (arguments.length === 1) {
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
				return (base * calculator.factorial(base - 1));
			}
		} else {
			throw "Error: Bad Number of Arguments";
		}
	},
}
