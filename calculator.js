

var calculator = {

  value: 0,

  //ADD
  add: function(num1, num2){
    if (num2 == undefined) {
      this.value += num1
      return this.value
    }
    this.value =  num1 + num2;
    return this.value
  },

  //SUBTRACT
  subtract: function(num1, num2){
    if (num2 == undefined) {
      this.value -=num1
      return this.value
    }
    this.value = num1 - num2;
    return this.value
  },

  //MULTIPLY
  multiply: function(num1,num2){
    if (num2 == undefined){
      this.value *= num1
      return this.value
    }
    this.value = num1 * num2
    return this.value
  },

  //DIVIDE
  divide: function(num1, num2){
    if (num2 == undefined){
      this.value = this.value / num1
      return this.value
    }
    this.value =  num1 / num2
    return this.value
  },

  //EXPONENT
  exponent: function(num1, num2){
    if (num2 == undefined){
      this.value = this.value ** num1
      return this.value
    }
    this.value = Math.pow(num1,num2)
    return this.value;
  },

  //SQUARE ROOT
  squareRoot: function(num1){
    if (num1 == undefined){
      return Math.sqrt(this.value)
    }
    this.value = Math.sqrt(num1)
    return this.value
  },

  //CLEAR
  clear: function(){
    this.value = 0;
  }
}
