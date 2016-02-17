var jsCal = {
  add: function(num1, num2){
    return(num1 + num2);
  },

  sub: function(num1, num2){
    return(num1 - num2);
  },

  multiply: function(num1, num2){
    return(num1 * num2);
  },

  divid: function(num1, num2){
    return(num1 / num2);
  },

  expo: function(num1, num2){
    var finalNum = 1;
    for(i = 0; i<num2; i++){
        finalNum = finalNum * num1;
    }
    return(finalNum);
  },

  averageNum: function(x){
    //must pass an array of numbers
    for(i =0; 1<x.length; i++){
      finalRes = fianlRes + x[i]
    };
    return(finalRes)
  }
}
