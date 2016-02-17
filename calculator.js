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
        finalNum *= num1;
        console.log("i is " + i + " " + "so far.");
        console.log("num1 equals," + num1);
    }
    return(finalNum);
  },
  /* I thought this would work,
  I looked it up and even saw this exact answer in stackoverflow
  but for some reason, num1 stays the same.
  */

  otherOperate: function(){
    return(console.log("Almost there."))
  }
}
