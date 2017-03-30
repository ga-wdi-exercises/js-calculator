var calculator = {

	add: function() {
		var result = 0;
		for (var i = 0; i < arguments.length; i++) {
			result = result + arguments[i];
		}
		console.log(result);
	},


	subtract: function() {
		var result = arguments[0];
		for (var i = 1; i < arguments.length; i++){
			result = result - arguments[i];
		}
		console.log(result);
	},


	multiply: function() {
		var result = 1;
		for (var i = 0; i < arguments.length; i++) {
			result = result * arguments[i];
		}
		console.log(result);
	},


	divide: function() {
		var result = arguments[0];
		for (var i = 1; i < arguments.length; i++){
			result = result / arguments[i];
		}
		console.log(result);
	},


	exponent: function() {
		var result = arguments[0];
		for (var i = 1; i < arguments.length; i++){
			result = Math.pow(result, arguments[i])
		}
		console.log(result);
	},

	negate: function(x) {
		console.log(x * -1);
	}
}
