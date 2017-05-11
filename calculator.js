var value=0;
var calculator= {
add: function (num1,num2){
      console.log(num1+num2);
      value =(num1 + num2);
      return "The sum of these two number is : "+ value;
    },
sub: function (num1, num2){
      console.log(num1-num2);
      value=num1 - num2;
      return value;
    },
multiply:  function (num1,num2){
      console.log(num1*num2 );
      value=num1 * num2;
      return value;
    },
divide:  function (num1,num2){
      console.log(num1/num2);
      value=num1 / num2;
      return value;
    },
expo:  function (num1,num2){
      console.log(num1**num2 );
      value= num1 ** num2;
      return value;
    },
formula: function (num1,num2){
      console.log(10*num1+num2);
      value=10*num1 + num2;
      return value ;
    },
master:function(num1,num2,num3){
  value =(num1 - num2) * (num3 ** num1);
  return value;
}

}
