// console.log('Hello World')
//
// var calc = {
//
//  sum: function (x,y) {
//      console.log(x+y);
//      return x+ y;
//   },
//   mult: function (x,y) {
//      console.log(x*y);
//      return x*y;
//    },
//   div: function (x,y) {
//       console.log(x/y);
//       return x/y;
//     },
//   sub: function (x,y) {
//         console.log(x-y);
//         return x-y;
//       },
//   exp: function (x,y) {
//           console.log(x**y);
//           return x**y;}
//         }


console.log('Hello World')

value = 0

var calc = {

 sum: function (x) {
     return value =(value + x);
  },
  mult: function (x) {
     return value = (value *x);
   },
  div: function (x) {
      return value=(value / x);
    },
  sub: function (x) {
        return value =(value - x);
      },
  exp: function (x) {
          return value = (value ** x);
        },
  clear: function () {
    return 0; }
}
