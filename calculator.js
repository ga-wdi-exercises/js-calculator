var calculator = {
 	add: function (num1, num2) {
	return num1 + num2;
	},

	multiply: function (num1,num2) {
	return num1*num2;
	},

	divide: function (num1,num2) {
	return num2/num1;
	},

	exponentOf: function (num1, num2) {
		return Math.pow(num1, num2);
	},

	remainderOf: function (num1,num2) {
		return num2 % num1;
	}

}

