var a = new Number;
var b = new Number;
var result = new Number;
var calculator = new Object();

calculator.add = function (a,b)
{
  result = a + b;
  console.log(result);
}

calculator.subtract = function(a,b)
{
    result = a - b;
    console.log(result);
}

calculator.divide = function (a,b)
{
  result = a / b;
  console.log(result);
}

calculator.multiply = function (a,b)
{
  result = a * b;
  console.log(result);
}

calculator.exponent = function (a,b)
{
  result = Math.pow(a, b);
  console.log(result);
}

calculator.squareRoot = function (a)
{
  result = Math.sqrt(a);
  console.log(result);
}
