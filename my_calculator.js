// This is my "starter code". I generated it from scatch.

//Function is math. When his function is called, a function named 'addition' is run with two arguments being passed through it. When num1 and num2 are passed through, it returns and output of that function for a sum of num1 and num2.

// use method math.add(1,3).
// Syntax error on line 8...

var calc = {
  value: 0,
  add: function(addnum){
    this.value += addnum;
    this.showValue();
  },

  showValue: function(){
    console.log("This is my current value:" + this.value);
  }
};

console.log(calc.add(4, 5));

//   clear: function(){
//     this.value = 0;
//     this.showValue();
//   }
