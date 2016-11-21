// let calculator = {
// //Math functions
// value:
//
//   add: function(a,b){
//       console.log(a + b);
//     },
//   subtract: function(a,b){
//       console.log(a - b);
//     },
//   multiply: function(a,b){
//       console.log(a * b);
//     },
//   division: function(a,b){
//       console.log(a / b);
//     },
//   exponent: function(a,b){
//       console.log(Math.pow(a,b));
//     },
//   mod: function (a,b){
//       console.log(a%b);
//   },
// };

let calculator = {
  value: 0,

  clear: this.value = 0,

  master:

  add: function(param1,param2) {
    if (arguments.length === 2) {
      this.value = (param1 + param2);
      console.log(this.value);
    } else {
       this.value = this.value + param1;
      console.log(this.value);
    }
  },
  subtract: function(param1,param2) {
    if (arguments.length === 2) {
      this.value = (param1 - param2);
      console.log(this.value);
    } else {
       this.value = this.value - param1;
      console.log(this.value);
    }
  },
  multiply: function(param1,param2) {
    if (arguments.length === 2) {
      this.value = (param1 * param2);
      console.log(this.value);
    } else {
       this.value = this.value * param1;
      console.log(this.value);
    }
  },
  divide: function(param1,param2) {
    if (arguments.length === 2) {
      this.value = (param1 / param2);
      console.log(this.value);
    } else {
       this.value = this.value / param1;
      console.log(this.value);
    }
  },
  square: function(param1,param2) {
    if (arguments.length === 2) {
      this.value = math.pow(param1,param2);
      console.log(this.value);
    } else {
      this.value = math.pow(this.value,param1);
      console.log(this.value);
    }
  },
  mod: function(param1,param2) {
    if (arguments.length === 2) {
      this.value = (param1 % param2);
      console.log(this.value);
    } else {
       this.value = this.value % param1;
      console.log(this.value);
    }
  },

};
