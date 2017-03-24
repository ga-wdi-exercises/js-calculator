var calculator = {
	add: function() {
		var returnVal;
		if (calculator.value === null || calculator.value === 0) {
			returnVal = 0;
		} else {
			returnVal = calculator.value;
		}
		for (var i = 0; i < arguments.length; i++) {
			returnVal += arguments[i];
		}
		calculator.value = returnVal;
		console.log(calculator.value);
	},
	subtract: function() {
		var returnVal;
		if (calculator.value === null || calculator.value === 0) {
			returnval = arguments[0];
		} else {
			returnVal = calculator.value;
		}
		for (var i = 0; i < arguments.length; i++) {
			returnVal -= arguments[i];
		}
		calculator.value = returnVal;
		console.log(calculator.value);
	},
	mutiply: function() {
		var returnVal;
		if (calculator.value === null || calculator.value === 0) {
			returnval = arguments[0];
		} else {
			returnVal = calculator.value;
		}
		for (var i = 0; i < arguments.length; i++) {
			returnVal *= arguments[i];
		}
		calculator.value = returnVal;
		console.log(calculator.value);
	},
	divide: function(a, b) {
		calculator.value = a / b;
		calculator.returnVal();
	},
	exponent: function(a, b) {
		calculator.value = Math.pow(a, b);
		calculator.returnVal();
	},
	square_root: function(a) {
		calculator.value = Math.sqrt(a);
		calculator.returnVal();
	},
	value: 0,
	clear: function() {
		calculator.value = 0;
		console.log(calculator.value);
	},
	returnVal: function() {
		console.log(calculator.value);
	},
	help: function() {
		for (var i = 0; i < calculator.helpTopics.length; i++) {
			console.log(calculator.helpTopics[i]);
		}
	},
	master: function(stringOfValues) {
		console.log(stringOfValues);
	},
	helpTopics: ['add: adds items', 'subtract: subtracts from first parameter', 'multiply: multipies items', 'divide: divides items', 'exponent: first parameter is the number you want to multipy, second parameter is your exponent value', "square_root: enter a single parameter and find it's square root", "value: displays the value", "clear: clears the value, sets it to 0"]
}
