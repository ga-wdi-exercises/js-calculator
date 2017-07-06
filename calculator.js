
var calc = {
   value : 0,
//starting value is 0//
add: function (a,b){
  //if user inputs a value for a and b they are defined//
  if(a!==undefined && b!==undefined)
  {
    //values for a and b and added together//
    this.value=(a+b);
    //the total is represented as by value//
    return this.value;
  }
  else{
    //value represents the outcome of the previous operation which is than added to a//
    this.value+=a;
    return this.value;
    //output is the sum of a and previous value//
  }
},
subtract: function (a,b){
  //if user inputs a value for a and b they are defined//
  if(a!==undefined && b!==undefined)
  {
    //b is subtracted from a//
    this.value=(a-b);
    //outcome is represented by value in the return//
    return this.value;
  }
  else{
    //the value represents the value of the outcome of the previous operations and -=a represents that value minus a//
    this.value-=a;
    //outcome is represented by value in the return//
    return this.value;
  }
},
multiple: function (a,b){
  //if user inputs a value for a and b they are defined//
  if(a!==undefined && b!==undefined)
  {
    //a and b are multipled //
    this.value=(a*b);
    //outcome is represented by value in the return//
    return this.value;
  }
  else{
    //the value represents the value of the outcome of the previous operations and *=a represents that value times a//
    this.value*=a;
    //outcome is represented by value in the return//
    return this.value;
  }
},
division: function (a,b){
  //if user inputs a value for a and b they are defined//
  if(a!==undefined && b!==undefined)
  {
    //a is divided by b //
    this.value=(a*b);
    //outcome is represented by value in the return//
    return this.value;
  }
  else{
    //the value represents the value of the outcome of the previous operations and /=a represents that value divided a//
    this.value /=a;
    //outcome is represented by value in the return//
    return this.value;
  }
},
exponent: function (a,b){
  //if user inputs a value for a and b they are defined//
  if(a!==undefined && b!==undefined)
  {//a exponited by b //
    this.value = math.pow(a,b);
    //outcome is represented by value in the return//
    return this.value;
  }
  else{
    //the value represents the value of the outcome of the previous operations and =math.powa represents that value exponited a//
    this.value =math.pow(a,b=2)
    //outcome is represented by value in the return//
    return this.value
  }
},
modulous: function (a,b){
  return a % b
  //if user inputs a value for a and b they are defined//
  if(a!==undefined && b!==undefined)
  {// modulous a divided by b //
    this.value = (a%b);
    //outcome is represented by value in the return//
    return this.value;
  }
  else{
    //the value represents the value of the outcome of the previous operations and %=a represents the values remainder after being divded by a//
    this.value %=a;
    //outcome is represented by value in the return//
    return this.value
}
},
clear: function()
  {
    //clear resets the value to 0//
    this.value=0;
   },

}//values given to a and b
