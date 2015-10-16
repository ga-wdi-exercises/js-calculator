var calculator = {
  add: function(a, b){
    console.log(a+b);
    calculator['value'] += a+b;
    console.log(calculator.value);
    return a+b;
  },
  subtract: function(a, b){
    console.log(a-b);
    calculator['value'] += a-b;
    console.log(calculator.value);
    return a-b;
  },
  multiply: function(a, b){
    console.log(a*b);
    calculator['value'] += a*b;
    console.log(calculator.value);
    return a*b;
  },
  divide: function(a, b){
    console.log(a/b);
    calculator['value'] += a/b;
    console.log(calculator.value);
    return a/b;
  },
  power: function(a, b){
    console.log(Math.pow(a, b));
    calculator['value'] += Math.pow(a, b);
    console.log(calculator.value);
    return Math.pow(a,b);
  },
  sqrt: function(a){
    console.log(Math.sqrt(a));
    calculator['value'] += Math.sqrt(a);
    console.log(calculator.value);
    return Math.sqrt(a);
  },
  value: 0,
  clear: function(){
      calculator.value=0;
      return calculator.value;
  },
  master: function(a){
    console.log(a);
    calculator['value'];
    console.log(calculator.value);
    return a;
  }
}
