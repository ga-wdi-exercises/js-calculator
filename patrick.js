let calculator = {

 value: 0,

 add: function(a,b){
   return a+b;

 },
 sub: function(a,b){
   return a-b;

 },
 mult: function(a,b){
   return a*b;

 },
 div: function(a,b){
   return a/b;

 },
 expo: function(a,b){
   return math.pow(a, b);

 },
 //   add: function(a,b){
 //     if (arguments.length === 2){
 //       this.value = (a+b);
 //       console.log(this.value);
 // }
 //
 //   else {
 //        this.value = this.value + a;
 //       console.log(this.value);
 //     }
 //   }
 };
