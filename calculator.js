// I changed the caclulator to accept 1 or 2 arguments.
// If the user enters a single argument, the operation would be performed on the
// running value. If the user enters two arguments the running value resets to the
// result of that operation.

var calculator = {};
calculator.value = 0;
calculator.add = function(num1,num2){
  if(num2){
    calculator.value = num1 + num2;
  }else{
    calculator.value+=num1;
  }
  return calculator.value;
}
calculator.subtract = function(num1,num2){
  if(num2){
    calculator.value = num1 - num2;
  }else{
    calculator.value-=(num1);
  }
  return calculator.value;
}
calculator.multiply = function(num1,num2){
  if(num2){
    calculator.value = num1 * num2;
  }else{
    calculator.value*=(num1);
  }
  return calculator.value;
}
calculator.divide = function(num1,num2){
  if(num2){
    calculator.value = num1 / num2;
  }else{
    calculator.value/=(num1);
  }
  return calculator.value;
}
calculator.exponent = function(num1,num2){
  if(num2){
    calculator.value = Math.pow(num1,num2);
  }else{
    calculator.value = Math.pow(calculator.value,num1);
  }
  return calculator.value;
}
calculator.modulus = function(num1,num2){
  if(num2){
    calculator.value = num1%num2;
  }else{
    calculator.value%= num1;
  }
  return calculator.value;
}
calculator.clear = function(){
  calculator.value = 0;
  return calculator.value;
}
calculator.master = function(string){
  console.log("this part is hard...")
}
