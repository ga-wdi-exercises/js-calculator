  var calculator = {
    add: function(a, b){
        return a + b;
      },
    sub: function(a, b){
        return a - b;
      },
    mult: function(a, b){
        return a * b;
      },
    div: function(a, b){
        return a / b;
      },
    exp: function(a, b){
        return Math.pow(a, b);
      }
  };
  console.log(calculator.add(10, 12));

  console.log(calculator.sub(20, 8));

  console.log(calculator.mult(2, 10));

  console.log(calculator.div(10, 5));

  console.log(calculator.exp(10, 3));
