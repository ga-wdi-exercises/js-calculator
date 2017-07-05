
//Name: Josue Rosales
//Date: Wed, July 5th, 2017
//calculator hw

var calculator = {

  value: 0,


  add: function( a,b)
  {
    if(a!==undefined && b!==undefined)
    {
      this.value=(a+b);
      return this.value;
    }
    else{
      this.value+=a;
      return this.value;
    }

  },



  subtract: function (a,b)
  {
    if (a!==undefined && b!==undefined)
    {
      this.value=(a-b);
      return this.value;
    }
    else{
      this.value-=a;
      return this.value;
    }
  },


  multiply: function( a,b)
  {
    if(a!==undefined && b!==undefined)
    {
      this.value=(a*b);
      return this.value;
    }
    else{
      this.value*=a;
      return this.value;
    }
  },


  divide: function( a,b)
  {
    //if two number are entered, the history is clear and assgined a new one.
    if(a!==undefined && b!==undefined)
    {
      this.value=(a/b);
      return this.value;
    }
    else{
      this.value/=a;
      return this.value;
    }


  },



  exponent: function( a,b)
  {
    if(a!==undefined && b!==undefined)
    {
      this.value=(a**b);
      return this.value;
    }
    else{
      this.value=this.value**a;
      return this.value;
    }
  },

  modulus: function( a,b)
  {

    if(a!==undefined && b!==undefined)
    {
      this.value=(a%b);
      return this.value;
    }
    else{
      this.value%=a;
      return this.value;
    }
  },

  clear: function()
  {

    this.value=0;
  },

  master: function(str)
  {
    console.log(str);
    // var nums=toString(str);
    str= str.replace("^", "**");
    console.log(str);
    return eval(str);



  }

}//end of calculator object


console.log(calculator.add(2,3))

console.log(calculator.subtract(2,3))


console.log(calculator.multiply(2,3))

console.log(calculator.divide(2,3))

console.log(calculator.exponent(2,3))

console.log(calculator.modulus(2,3))
