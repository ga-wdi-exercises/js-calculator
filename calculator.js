var calculator = {
	add: function(a,b){
		console.log(a+b);
	},
	subtraction: function(a,b){
		console.log(a-b);
	},

	multiplication: function(a,b){
		console.log(a*b);
	},

	division: function(a,b){
		console.log(a/b);
	},

	exponents: function(a,b){
		console.log(Math.pow(a,b));
	},

	squareroot: function(a,b){
		console.log((Math.sqrt(a))+(Math.sqrt(b)));
	}

};

calculator.squareroot(4,4);