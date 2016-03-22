
//calculator(){
var calculator = {
  add: function(num1, num2){
    value = num1 + num2;
  return value;
  },
  subtract: function(num1, num2){
    value = num1 - num2;
  return value;
  },

  multiply: function(num1, num2){
    value = num1 * num2;
   return value;
  },
  divide: function(num1, num2){
    value = num1 / num2;
   return value;
  },
  powerOf: function(num1, num2){
    value = Math.pow(num1, num2);
    return value;
  }
};
// _------- ^^^^^ working basic calculator above /\ /\ /\ /\
//  \/ \/ \/ \/  Working memory calculator here \/\|/ \/ \/ \/ \/

// Instructions: MUST USE CALCULATOR above first! This one only uses
// the previous result. Ex: calcMemory.add(4) adds 4 to whatever
// you had before.  You can keep using calcMemory over and over,
// but when you use the basic calculator again, the "memory," aka
// the variable of `value`, is wiped clean.

var calcMemory = {
  add: function(num3){
    value = value + num3;
  return value;
},
subtract: function(num3){
    value = value - num3;
  return value;
},

multiply: function(num3){
    value = value * num3;
   return value;
},
divide: function(num3){
    value = value / num3;
   return value;
},
powerOf: function(num3){
    value = Math.pow(value, num3);
  return value;
}

//num1 = value;
}
