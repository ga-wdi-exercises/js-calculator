var calculator = {
  value: 0,
  add: function(x, y) {
    if(y) {
      var sum = x + y
    } else {
      var sum = this.value + x ;
    }
    this.value = sum
    return sum
  },
  subtract: function(x, y) {
    if(y) {
      var sum = x - y
    } else {
      var sum = this.value - x ;
    }
    this.value = sum
    return sum
  },
  multiply: function(x, y) {
    if(y) {
      var sum = x * y
    } else {
      var sum = this.value * x ;
    }
    this.value = sum
    return sum
  },
  division: function(x, y) {
    if(y) {
      var sum = x / y
    } else {
      var sum = this.value / x ;
    }
    this.value = sum
    return sum
  },

}
//
// function exponent (num1, num2) {
//     var sum = 1;
//     for (num2; num2 > 0; num2--){
//     sum = sum * num1 ;
//   }
//     return sum;
//   }
// exponent (6,2);
//
//
// var i = 0;
// var c = i++;
//       c = ++i;
//
// var i = 10;
// var c = i++;
//       c = ++i;
//       c = --i;
//       c = ++i + i++;
//       c = ++i - i++;
//       c = ++i * i++;
//       c = ++i / i++;
// alert(c);
