var createCalculator = function () {

	var calculator = {};

	calculator.CalculatorValue = 0;

	calculator.value = function () {
		return this.CalculatorValue;
	};

	calculator.add = function (num) {
		this.CalculatorValue += num;
	};

	calculator.subtract = function (num) {
		this.CalculatorValue -= num;
	};

  calculator.multiply = function (num) {
		this.CalculatorValue *= num;
	};

  calculator.divide = function (num) {
		this.CalculatorValue /= num;
	};

  calculator.exponents = function (num) {
    this.CalculatorValue = Math.pow(num);
  };

  calculator.clear = function () {
    this.calculator.CalculatorValue;
  };
	return calculator;
};
