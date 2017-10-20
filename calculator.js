var calculator = {
  value: [""],

  additon: function(a, b){
    var add = a + b
    console.log(a+'+'+b+"="+add)
    this.value.push(add)
  },

  subtraction: function(a, b){
    var sub = a - b
    console.log(a+'-'+b+"="+sub)
    this.value.push(sub)
  },

  multiplication: function(a, b){
    var mul = a * b
    console.log(a+'*'+b+"="+mul)
    this.value.push(mul)
  },

  division: function(a, b){
    var div = a / b
    console.log(a+'/'+b+"="+div)
    this.value.push(div)
  },

  exponents: function(a, b){
    var exp = Math.pow(a, b)
    console.log(a+" to the power of "+b+" = "+exp)
    this.value.push(exp)
  },

  squareRoot: function(a){
    var sqr = Math.sqrt(a)
    console.log("Sqare root of "+a+" is "+sqr)
    this.value.push(sqr)
  },

  clear: function(){
  this.value = []}

}
