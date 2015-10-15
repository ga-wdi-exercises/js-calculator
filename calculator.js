var value = 0;

var calc = {
   add: function(add1, add2) {
     value += add1 + add2;
     return add1 + add2;
   },
   subtract: function(sub1, sub2) {
     value +=  sub1 - sub2;
     return sub1 - sub2;
   },
   multiply: function(mul1, mul2) {
     value += mul1 * mul2;
     return mul1 * mul2;
   },
   divide: function(div1, div2) {
     value += div1 / div2;
     return div1 / div2;
   },
   exponent: function(base, exponent) {
     var result = base;
     for (var i = exponent; i > 1; i--) {
       result *= base;
     }
     result += result;
     return result;
   },
   clear: function() {
    console.log("Value has been cleared.");
    value = 0;
   }
}
