var calc = {
  add: function (a, b) {
	  return a + b;
	},
  sub: function (a, b) {
	  return a - b;
	},
  multi: function (a, b) {
	  return a * b;
	},
  divide: function (a, b) {
    return a / b;
  },
  powers: function (a, b) {
	  return Math.pow(a, b);
	},
  //operation of choice
  squarert: function (a) {
    return Math.sqrt(a);
  }
};

//bonus 1 + 2
var calcBonus = {
  value: 0,
  add: function (a) {
	  return this.value +=  a;
	},
  sub: function (a) {
	  return this.value -= a;
	},
  multi: function (a, b) {
	  return this.value *= a;
	},
  divide: function (a) {
    return this.value /= a;
  },
  powers: function (a, b) {
    this.clear();
	  return this.value = Math.pow(a, b);
	},
  squarert: function (a) {
    return Math.sqrt(this.value);
  },
  master: function (str) {
    str = str.toString();
    return this.value += eval(str);
  },
  clear: function () {
	  calc.value = 0;
	}
};

/*
the bonus code sort of gives the calculator 'memory', but maybe not the way
it's described in the bonus section of readme.md.  I wasn't sure how to make that example
sequence evaluate to 10.
*/
