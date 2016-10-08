var value = 0;

var calculator = {
	add: function (a) {
		value += a;
		return value;
	},
	subtract: function (a) {
		value -= a;
		return value;
	},
	multiply: function (a) {
		value *= a;
		return value;
	},
	divide: function (a) {
		value /= a;
		return value;
	},
	exp: function (a) {
		value = Math.pow(value, a);
		return value;
	},
	remainder: function (a) {
		value %= a;
	},
	clear: function() {
		value = 0;
		return value;
	},
	master: function (a) {
		var operationString = a.split(' ');
		return operationString;
		// for (i = 0; i<operationString.length; i++){
		// }
	}
}


// * Addition
// * Subtraction
// * Multiplication
// * Division
// * Exponents (Hint: Look up Javascript's Math object)
// * An operation of your choice!