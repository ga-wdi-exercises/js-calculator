var calculator = {
  add:function (x , y){
    console.log(x + y);
    return (x + y);
  },
  sub:function (x , y){
    console.log(x - y);
    return (x - y);
  },
  multiply:function (x , y){
    console.log(x * y);
    return (x * y);
  },
  divide:function (x , y){
    console.log(x / y);
    return (x / y);
  },
  exponentiate:function (x , y){
    console.log(Math.pow(x,y));
    return Math.pow(x,y);
  },
  square:function (x , y){
    console.log(x**y);
    return (x**y);
  }
}
