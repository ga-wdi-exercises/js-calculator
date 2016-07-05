var calc = prompt(' Welcome to Nelley`s calculator! what operation would you like to do?
1. Addition \n
2. Subtraction \n
3. Multiplication \n
4. Division \n
5. Exponential \n
');
console.log(calc);
if (calc == 5 || 4 || 3 || 2 || 1)
{
var calculate = {
  exponent: function (base, power)
  {
    return math.pow(base, power);
  }
  add: function (num1, num2)
  {
    return num1 + num2;
  }
  sub: function(num1, num2)
  {
    if (num1 > num2)
    {
      retun num1 - num2;
    }
    else
    {
      return num2 - num1;
    }
  }
  multiply: function(num1, num2)
  {
    return num1 * num2;
  }
  divide: function(dividend, divisor)
  {
    return dividend/divisor;
  }
}
// if calc == 1 ----> console.log(calculate.add);
// if calc == 2 ----> console.log(calculate.sub);
// if calc == 5 ----> console.log(calculate.exponent);
// if calc == 4 ----> console.log(calculate.divide);
// if calc == 3 ----> console.log(calculate.multiply);
};
