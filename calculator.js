var calculator = {
  memory : 0,
  clearMemory: function () {
    memory=0;
  },
  addition : function(num1,num2){
    memory+=num1+num2;
    return num1+num2;
  },
  subtraction: function(num1,num2){
    memory+=num1-num2;
    return num1-num2;
  },
  multiplication:function(num1,num2){
    memory+=num1*num2;
    return num1*num2;
  },
  division:function(num1,num2){
    memory+=num1/num2;
    return num1/num2;
  },
  exponents:function(num1,num2){
    memory+=Math.pow(num1,num2);
    return Math.pow(num1,num2);
  },
  factorial:function(num1) {
    var temp=0;
    for (var i = 1; i <=num1; i++) {
      temp+=i;
    }
    memory+=temp;
    return temp;
  }
};
