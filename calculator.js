var calculator = {

  additon: function(a, b){
    var add = a + b
    console.log(a+'+'+b+"="+add)
  },

  subtraction: function(a, b){
    var sub = a - b
    console.log(a+'-'+b+"="+sub)
  },

  multiplication: function(a, b){
    var mul = a * b
    console.log(a+'*'+b+"="+mul)
  },

  division: function(a, b){
    var div = a / b
    console.log(a+'/'+b+"="+div)
  },

  exponents: function(a, b){
    var exp = Math.pow(a, b)
    console.log(a+" to the power of "+b+" = "+exp)
  },

  squareRoot: function(a){
    var sqr = Math.sqrt(a)
    console.log("Sqare root of "+a+" is "+sqr)
  },

}
