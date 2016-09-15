var calculator = {
value:null,
add:function (num1, num2){
  if (num2 !==undefined) {
      value = (num1 + num2);
      return value;
}   else {
      value = value + num1;
      return value
}
},
subtract:function (num1, num2){
  if (num2 !==undefined) {
      value = (num1 + num2);
      return value;
  }  else {
      value = value + num1;
      return value
}
},
multiply:function (num1, num2){
  if (num2 !==undefined) {
      value = (num1 + num2);
      return value;
  }  else {
      value = value + num1;
      return value
}
},
divide:function (num1, num2){
  if (num2 !==undefined) {
      value = (num1 + num2);
      return value;
  }  else {
      value = value + num1;
      return value
}
},
exponent:function (num1, num2){
  if (num2 !==undefined) {
      value = (Math.pow(num1, num2));
      return value;
  }  else {
      value = (Math.pow(value, num1));
      return value
}
},
root:function (num1){
  if (num1 !== undefined) {
      value = (Math.sqrt(num1));
      return value;
  }  else {
      value = Math.sqrt(value);
      return value
}
},
master:function (input){
  value = eval(input)
  return value
},
clear:function(){
  value = null
}

}
