//THE URL FOR THIS HOMEWORK IS https://github.com/ga-dc/js-calculator
var x;
var y;
var calculator = {
		add: function(x, y, value) {
			value += (x + y);
			return x + y;
		}, 
		subtract: function(x, y, value){
			return x - y;
			value = value - x - y;
		}, 
		multiply: function(x, y, value){
			return x * y;
			value = value * x * y;
		}, 
		divide: function(x, y, value){
			return x / y;
			value = value / x / y;
		}, 
		exponent: function(x, y, value){
			return Math.pow(x, y);
			console.log('calculator does not include stored value in exponent calc');
			//If user inputs only one value (y is undefined) it would break value's chain
		}, 
		circle: function(x){
			return 2 * Math.PI * Math.pow(x, 2);
		},
		clear: function(value){
			value = 0;
			return 0;
		}
}