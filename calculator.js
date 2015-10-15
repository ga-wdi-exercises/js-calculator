
var calculator = {
  //this variable is the memory
  value: 0,
  addition: function(num1, num2) {
    var answer = num1+num2;
    calculator.value+=answer;
    return answer;
  },
  subtraction: function(num1, num2) {
    var answer =  num1-num2;
    calculator.value+=answer;
    return answer;
  },
  multiplication: function(num1, num2){
    var answer =  num1*num2;
    calculator.value+=answer;
    return answer;
  },
  division: function(num1, num2){
    var answer = num1/num2;
    calculator.value+=answer;
    return answer;
  },
  exp: function(num1, num2){
    var answer = Math.pow(num1, num2);
    calculator.value+=answer;
    return answer;
  },
  //added modulo function
  mod: function(num1, num2){
    var answer = num1%num2;
    calculator.value+=answer;
    return answer;
  },
  //clears memory
  clear: function(){
    calculator.value = 0
  },



}
