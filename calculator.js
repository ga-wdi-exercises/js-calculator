var calculator = {

  add:function (num1, num2){
    var sum = num1 + num2
    return sum;
  },

    subtract: function (num1, num2){
      var diff = num1 - num2
      return diff;
    },

    multiply: function (num1, num2){
      var product = num1 * num2
      return product;
    },

    divide: function (num1, num2){
      var quotient = num1 / num2
      return quotient;
    },

    exponent: function(num1, num2) {
      var expo = Math.pow (num1, num2);
      return expo;
    },

    cosine: function(num1) {
      var cos = Math.cos (num1);
      return cos;
    }




}
