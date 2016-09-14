var calculator = {
value:null,
add:function (num1, num2){
  value = (num1 + num2);
  return value;
},
subtract:function (num1, num2){
  value = (num1 - num2);
  return value;
},
multiply:function (num1, num2){
  value = (num1 * num2);
  return value;
},
divide:function (num1, num2){
  value = (num1 / num2);
  return value;
},
exponent:function (num1, num2){
  value = (Math.pow(num1, num2));
  return value;
},
root:function (num1){
  value = (Math.sqrt(num1));
  return value;
}

}
