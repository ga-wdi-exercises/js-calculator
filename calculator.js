var calculator = {
  addition: function(a,b) {
    if (calculator["currentVal"] === false) {
      calculator["currentVal"] = a+b;
      return a+b;
    }
    else {
      calculator["currentVal"] = calculator["currentVal"]+b;
      return calculator["currentVal"];
    }
  },
  subtraction: function(a,b) {
    if (calculator["currentVal"] === false) {
      calculator["currentVal"] = a-b;
      return a-b;
    }
    else {
      calculator["currentVal"] = calculator["currentVal"]-b;
      return calculator["currentVal"];
    }
  },
  multiplication: function(a,b) {
    if (calculator["currentVal"] === false) {
      calculator["currentVal"] = a*b;
      return a*b;
    }
    else {
      calculator["currentVal"] = calculator["currentVal"]*b;
      return calculator["currentVal"];
    }
  },
  division: function(a,b) {
    if (calculator["currentVal"] === false) {
      calculator["currentVal"] = a/b;
      return a/b;
    }
    else {
      calculator["currentVal"] = calculator["currentVal"]/b;
      return calculator["currentVal"];
    }

  },
  exponentiation: function(a,b) {
    if (calculator["currentVal"] === false) {
      calculator["currentVal"] = Math.pow(a, b);
      return Math.pow(a, b);
    }
    else {
      calculator["currentVal"] = Math.pow(calculator["currentVal"],b);
      return calculator["currentVal"];
    }
  },
  modulo: function(a,b) {
    if (calculator["currentVal"] === false) {
      calculator["currentVal"] = a%b;
      return a%b;
    }
    else {
      calculator["currentVal"] = calculator["currentVal"]%b;
      return calculator["currentVal"];
    }
    return a%b;
  },
  currentVal: false,
  current: function() {
    return calculator["currentVal"];
  },
  reset: function() {
    calculator["currentVal"] = false;
  }
}
