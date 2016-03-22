var calculator = {
	num1: 0,
	num2: 0,
	exp: 1,
	add: function(num1, num2) {
		sum = (num1 + num2);
		return sum;
	},
	mult: function(num1, num2) {
		prod = (num1 * num2);
		return prod;
	},
	sub: function(num1, num2) {
		diff = (num1 - num2);
		return diff;
	},
	div: function(num1, num2) {
		quot = (num1 / num2);
		return quot;
	},
	pwr: function(num1, exp) {
		if (exp === 0) {
			return num1;
		}
		else {
			ans = num1 * (pwr(num1, (exp = exp -1) ));
		}
	},
};
var x = 10;
var y = 20;


var sm = 0;
sm = calculator.add(x, y);
console.log(sm);
