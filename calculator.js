var answer;

var calculator = {
  add: function(num1, num2) {
    answer = num1 + num2;
    return answer;
  },
  subtract: function(num1, num2) {
    answer = num1 - num2;
    return answer;
  },
  multiply: function(num1, num2) {
    answer = num1 * num2;
    return answer;
  },
  divide: function(num1, num2) {
    answer = num1 / num2;
    return answer;
  },
  square: function(num) {
    answer = num * num;
    return answer;
  },
  exponent: function(baseNum, exponent) {
    answer = Math.pow(baseNum, exponent);
    return answer;
  },
  squareRoot: function(num) {
    answer = Math.sqrt(num);
    return answer;
  },
  clear: function() {
    answer = 0;
  }
};
