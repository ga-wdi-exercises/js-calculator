var calculator= {
add: function (num1,num2){
      console.log(num1+num2);
      return "The sum of these two number is : "+num1 + num2;
    },
sub: function (num1, num2){
      console.log(num1-num2);
      return num1 - num2;
  },
multiply:  function (num1,num2){
      console.log(num1*num2 );
      return num1 * num2;
    },
divide:  function (num1,num2){
      console.log(num1/num2);
      return num1 / num2;
    },
expo:  function (num1,num2){
      console.log(num1**num2 );
      return num1 ** num2;
    },
formula: function (num1,num2){
      console.log(10*num1+num2);
      return 10*num1 + num2 ;
    }

}
