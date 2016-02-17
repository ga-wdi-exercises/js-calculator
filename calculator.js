var calculator = {
  value: null,
  add: function(num1, num2) {
    this.value = num1 + num2;
    return this.value;
  },
  subtract: function(num1, num2) {
    this.value = num1 - num2;
    return this.value;
  },
  multiply: function(num1, num2) {
    this.value = num1 * num2;
    return this.value;
  },
  divide: function(num1, num2) {
    if((num1 && num2)!== 0) {
      this.value = num1 / num2;
      return this.value;
    }
    else {
    return NaN;
    }
  },
  pow: function(num1, num2) {
    this.value = Math.pow(num1, num2);
    return this.value;
  },
  sqrt: function(num1) {
    this.value = Math.sqrt(num1);
    return this.value;
  }
  clear: function() {
    this.value = null;
    console.log("memory cleared")
  }
}
