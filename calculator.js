
var calculator = {
// value: 0,
  addition: function(a, b){
console.log(a + b)
return(a+b)
// if (arguments.length ==2) {
//   return calculator.value=(a +b)

// else {
//   return calculator.value= (calculator.value + a)
// }
},
    subtraction: function(a,b){
    console.log(a - b)
    return(a-b)
    // if (arguments.length==2) {
    //   return calculator.value=(a - b)}
    //   else{
    //     return calculator.value=(calculator.value - a)
    //   }
    },

  multiplication: function(a,b){
    console.log(a * b)
    return(a*b)
    // if (arguments.length==2){
    //   return calculator.value=(a * b)}
    //   else{
    //     return calculator.value=(calculator.value * a)
    //   }
    },

  division: function(a, b){
    console.log(a / b)
    return (a/b)
    // if (arguments.length ==2){
    //   return calculator.value = (a / b)}
    //   else {
    //     return calculator.value=(calculator.value/a)
    //   }
  },


  exponents: function(a, b){
    console.log(a**b)
    return (a**b)
    // if (arguments.length ==2) && (a < b){
    //   return calculator.value = (a**b)}
    // else if (arguments.length ==2)
    //   return calculator.value = (calculator.value)
    // }
    // }
  },
addAndMultiply: function(a, b, c){
  console.log((a + b) / c)
  return((a+b)/c)
}
}
