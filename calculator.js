
var calculator = {
  add:function(x, y){
      return x + y; },

  subtract:function(x, y){
           return x - y; },

  multiply:function(x, y) {
           return x * y; },

  devide:function(x, y) {
         return x / y; },

         factor:function Factorial (n) {
           if (n <= 1) {
               return 1;
           }
           return n * Factorial (n-1);
       }

};
