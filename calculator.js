var calculator = {
  value: 0,
  add: function(num1, num2) {
    if (num2) {
      this.value = num1 + num2;
    } else {
      this.value = this.value + num1;
    }
    return this.value;
  },
  subt: function(num1, num2) {
    if (num2) {
      this.value = num1 - num2;
    } else {
       this.value = this.value - num1;
    }
    return this.value;
  },
  mult: function(num1, num2) {
    if (num2) {
      this.value = num1 * num2;
    } else {
      this.value = this.value * num1;
    }
    return this.value;    
  },
  div: function(num1, num2) {
    if (num2) {
      this.value = num1 / num2;
    } else {
      this.value = this.value / num1;
    }
    return this.value;    
  },
  exp: function(num1, num2) {
    if (num2) {
      this.value = Math.pow(num1, num2);
    } else {
      this.value = Math.pow(this.value, num1);
    }
    return this.value;
  },
  average: function(num1, num2) {
    if (num2) {
      this.value = (num1 + num2)/2;
    } else {
      this.value = (this.value + num1)/2;
    }
    return this.value;    
  },
  master: function(equation) {
      this.value = eval(equation);
      return this.value;
  },
  clear: function() {
  return this.value = 0;
  }
}

