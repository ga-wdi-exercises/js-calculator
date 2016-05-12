// This is my "starter code". I generated it from scatch.

//Function is math. When his function is called, a function named 'addition' is run with two arguments being passed through it. When num1 and num2 are passed through, it returns and output of that function for a sum of num1 and num2.

// use method math.add(1,3).
var math = {
  value: 3,
  add: function(addnum){
    //   return addnum + addnum;
    this.value += addnum;
    this.showValue();

      // console.log(addition(addnum + addnum));
  }
};
