alert("This is a JS calculator")






var calculator = {
  Multiply: function(num1,num2){
    return(num1 * num2);
  },
  Subtraction:function(num1,num2){
    return(num1 - num2);
  },
  Division: function(num1,num2){
    return(num1 / num2);
  },
  Addition: function(num1, num2){
   return(num1 + num2);
  },
  exp: function(num1,num2){
    return Math.pow(num1,num2);
  },
  mod: function(num1,num2){
    return(num1%num2);
  },
}
