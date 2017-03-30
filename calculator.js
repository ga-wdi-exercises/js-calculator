
var calculator = {
  add: function (num1, num2){
    return num1 + num2;
  }

  sub: function (num1, num2){
    return num1 - num2;
  }

  div: function (num1, num2){
    return num1 / num2;
  }

  mul: function (num1, num2){
    return num1 * num2;
  }
 exp: function (num1, pow){
   Math.pow(num1, pow);
 }
}

calculator.add(num1, num2);
calculator.sub(num1, num2);
calculator.div(num1, num2);
calculator.mul(num1, num2);
calculator.Math.pow(num1, num2);
