var calculator = {
  "memory" : [],
  "memoryReset" : function() {
    this.memory = [];
  },
  "add" : function (a,b) {
    var self = this;
    if (this.memory.length > 0) {
      var memVal = self.memory[self.memory.length-1];
      self.memory.push(memVal+b);
      return memVal+b;
    }
    this.memory.push(a+b);
    return a+b;
  },
  "subtract" : function (a,b) {
    return a-b;
  },
  "multiply" : function(a,b) {
    document.getElementById("calcIn").value = a*b;
    return a*b;
  },
  "divide" : function(a,b) {
    document.getElementById("calcIn").value = a/b;
    return a/b;
  },
  "exponent" : function(a,b) {
    document.getElementById("calcIn").value = Math.pow(a,b);
    return Math.pow(a,b);
  },
  "pi" : Math.PI,
  "clear" : function() {
    document.getElementById("calcIn").value = "";
  },
  //"master" method, can parse through a STRING of operations (e.g., (2 - 1) * (5 ^ 2))
  //spaces and parantheses
  "master" : function() {
    return eval(document.getElementById("calcIn").value);
    }
  }
