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

  divid: function(bigNum, lilNum){
    return(bigNum / lilNum);
  },

  expo: function(num1, num2){
    var finalNum = 1;
    for(i = 0; i<num2; i++){
        finalNum = finalNum * num1;
    }
    return(finalNum);
  },
  //must pass an array of numbers
  averageNum: function(array){
    var addNum = 0;
    for(i =0; i<array.length; i++){
      addNum = addNum + array[i];
    }
    var finalRes = addNum / array.length;
    return(finalRes);
  }
}
