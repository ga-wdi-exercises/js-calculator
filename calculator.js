let calculator = {
  value: 0,
  //methods
  clear: function() {
    this.value = 0;
  },
  add: function(param1, param2) {
    if(arguments.length === 2) {
      this.value = param1 + param2;
    } else {
      this.value += param1;
    }
  },
  subract: function(param1, param2) {
    if(arguments.length === 2) {
      this.value = param1 - param2;
    } else {
      this.value -= param1;
    }
  },
  multiply: function(param1, param2) {
    if(arguments.length === 2) {
      this.value = param1 * param2;
    } else {
      this.value *= param1;
    }
  },
  divide: function(param1, param2) {
    if(arguments.length === 2) {
      this.value = param1 / param2;
    } else {
      this.value /= param1;
    }
  },
  exponent: function(param1, param2) {
    if(arguments.length === 2) {
      this.value = Math.pow(param1, param2);
    } else {
      this.value = Math.pow(this.value, param1);
    }
  },
  baselog: function(param1, param2) {
    if(arguments.length === 2) {
      this.value = Math.log(param1) / Math.log(param2);
    } else {
      this.value = Math.log(this.value) / Math.log(param1);
    }
  },
  master: function(expression) {
    this.value = eval(expression.replace('^', '**'));
  },
};
