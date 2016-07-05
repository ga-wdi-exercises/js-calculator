var calculator = {
	add: function(num1, num2) {
		return (num1 + num2);
	},
	subtract: function(num1, num2) {
		return (num1 - num2);
	},
	multiply: function(num1, num2) {
		return (num1 * num2);
	},
	divide: function(num1, num2) {
		return (num1 / num2);
	},
	exponent: function(base, ex) {
		return Math.pow(base, ex);
	},
	rng: function() {
		var random = Math.random();
		if (random < 0.3333) {
			random = "rock";
		}
		else if (random > 0.3333 && random < 0.6666) {
			random = "paper";
		}
		else {
			random = "scissors";
		}
		return random;
	}
}