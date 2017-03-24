var calculator = {
	add: function() {
		var returnVal;
		if (calculator.value === null) {
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
		if (calculator.value === null) {
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

	mutiply: function(a, b) {
    var returnVal;
		if (calculator.value === null) {
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
	value: null,
	clear: function() {
		calculator.value = null;
	},
	returnVal: function() {
		console.log(calculator.value);
	}
}
