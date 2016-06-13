var calculator = {
  add: function( alpha, beta ) {
    return alpha + beta;
  },
  subtract: function( alpha, beta ) {
    return alpha - beta;
  },
  multiply: function( alpha, beta ) {
    return alpha * beta;
  },
  divide: function( alpha, beta ) {
    return (beta == 0) ? NaN : alpha / beta;
  },
  pow: function( num, exp ) {
    var result = 1;
    for ( var i = 0; i < exp; i++ ) {
      result *= num;
    }
    return result;
  },
};

module.exports = calculator;
