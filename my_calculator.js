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
  sub: function(subnum){
    this.value -= subnum;
    this.showValue();
  },
  multi: function(multinum){
    this.value *= multinum;
    this.showValue();
  },
  divide: function(dividenum){
    this.value /= dividenum;
    this.showValue();
  },
  exponent: function(expnum){
    this.value = math.pow(this.value, expnum);
    this.showValue();
  },
  showValue: function(){
    console.log("The current value is " + this.value + ".");
  },
  clear: function(){
    this.value = 0;
    this.showValue();
  }
};

console.log(calc.add(3, 1));
console.log(calc.sub(3, 1));
console.log(calc.multi(3, 1));
console.log(calc.divide(3, 1));

calc.showValue();

function speak() {
  console.log(word);
}
