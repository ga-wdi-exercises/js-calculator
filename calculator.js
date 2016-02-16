var calculator = {
  value: null,
  add: function(num1,num2){
    this.value = num1+num2;
    return this.value;
  },

  subtract: function(num1,num2){
    this.value = num1-num2;
    return this.value;
    },
  multiply: function(num1,num2){
    this.value = num1*num2;
    return this.value;
    },
  divide: function(num1,num2){
    this.value = num1/num2;
    return this.value;
    },
  exponent: function(num1,num2){
    this.value = math.pow(num1,num2);
    return this.value;
    },
  isGreaterThan: function(num1,num2){
    this.value = num1>num2;
    return this.value;
    },
  clear: function(){
    this.value = null;
  },
  master: function(string){
      this.value = eval(string);
      return this.value;
  }
};
