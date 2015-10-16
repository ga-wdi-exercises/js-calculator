var result = 0;
calc = {
  add: function(num1, num2) {
    result = num1 + (num2 || result);
    return result;
  },
  subtract: function(num1, num2) {
    result = num1 - (num2 || result);
    return result;
  },
  multiplication: function(num1, num2) {
    result = num1 * (num2 || result);
    return result;
  },
  division: function(num1, num2) {
    result = (num1 / num2) || (result / num1);
    return result;
  },
  power: function(num1, num2) {
    result = (num2 ? Math.pow(num1,num2) : Math.pow(result, num1) );
    return result;
  },
  sqrt: function(num1) {
    result = Math.sqrt(num1 || result);
    return result;
  },
  clear: function() {
    result = 0;
    return result;
  },
}
