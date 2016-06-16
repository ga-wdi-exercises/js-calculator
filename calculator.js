var Calculator = function () {

	this.value = 0;

};

Calculator.prototype.add = function (num) {
	this.value += num;
};

Calculator.prototype.subtract = function (num) {
	this.value -= num;
};

 Calculator.prototype.multiply = function (num) {
	this.value *= num;
};

 Calculator.prototype.divide = function (num) {
	this.value /= num;
};

Calculator.prototype.exponents = function (num) {
    this.value = Math.pow(this.value, num);
};
Calculator.prototype.clear = function () {
	this.value = 0;
};
