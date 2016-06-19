var calculator = {
  result : 0,
  add : function(a,b){
    this.result += a+b
    console.log(this.result)
  },
  multiply: function(a,b){
    this.result += a*b;
    console.log(this.result)
  },
  divide: function(a,b){
    this.result += a/b;
    console.log(this.result)
  },
  subtract: function(a,b){
    this.result += a-b;
    console.log(this.result)
  },
  expo: function(a, b){
    this.result += Math.pow(a, b)
    console.log(this.result)
  }
}


//calculator.add(2,2)
calculator.expo(3,6)
calculator.divide(6,2)
