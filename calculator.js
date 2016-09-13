


var calculator = {
  value:0,               /* memory */
  clear: function () {   /* clear memory */
    return(calculator.value=0);
  },
  add: function (arg1,arg2) {  /* add two values or add to memory */
    var retval;
    arguments.length===1 ? retval=calculator.value+=eval(arg1) : retval=eval(arg1)+eval(arg2);
    return retval;
  },
  sub: function (arg1,arg2) {   /* subtract arg 2 from arg1 or subtract from memory */
    var retval;
    arguments.length===1 ? retval=calculator.value-=eval(arg1) : retval=eval(arg1)-eval(arg2);
    return retval;
  },
  multiply: function (arg1,arg2) {    /* multiply arg 1 and arg2 or Multiply with Memory value  */
    var retval;
    arguments.length===1 ? retval=calculator.value*=eval(arg1) : retval=eval(arg1)*eval(arg2);
    return retval;
  },
  divide: function (arg1,arg2) {  /* divide  arg 1 by  arg2 or divide arg2 into  Memory value  */
    var retval;
    arguments.length===1 ? retval=calculator.value/=eval(arg1) : retval=eval(arg1)/eval(arg2);
    return retval;
  },
  exp: function (arg1,arg2) {
   return(eval(arg1) ** eval(arg2));
  },
  fact: function (arg1) { /* factorial return arg1!  */
     if ((arg1==0)||(arg1==1)) {
      return (1);
    } else {
      return(calculator.fact(arg1-1)*arg1); /* nifty recursive call :) */
    }

  }
}
