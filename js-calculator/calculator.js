var calculator = {

  add: function (a,b) {
    console.log(a + b);
    return a + b;
  },

  subtract: function (a,b) {
    console.log(a - b);
    return a - b;
  },

  multiply: function (a,b) {
    console.log(a * b);
    return a * b;
  },

  divide: function (a,b) {
    console.log(a / b);
    return a / b;
  },

  exp: function (a,b) {
    console.log(Math.pow(a,b));
    return Math.pow(a,b);
  },

  isEven: function (a) {
    var even = a;
    if (even % 2 === 0) {
      console.log("It's even!");
    } else {
      console.log("It's odd!");
    }
  }
}
