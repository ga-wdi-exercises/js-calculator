var calculator = {

value: 0,

add: function(a, b) {
  if (b == undefined) {
    console.log("[Using Memeory] "+String(this.value)+" + "+String(a)+" = ");
    this.value += a;
    return this.value;
  }
  console.log(String(a)+" + "+String(b)+" = ");
  this.value = a+b;
  return this.value;
},

sub: function(a,b) {
  if (b == undefined) {
    console.log("[Using Memeory] "+String(this.value)+" - "+String(a)+" = ");
    this.value -= a;
    return this.value;
  }
  console.log(String(a)+" - "+String(b)+" = ");
  this.value = a-b;
  return this.value;
},

mult: function(a,b) {
  if (b == undefined) {
    console.log("[Using Memeory] "+String(this.value)+" * "+String(a)+" = ");
    this.value *= a;
    return this.value;
  }
  console.log(String(a)+" * "+String(b)+" = ");
  this.value = a*b;
  return this.value;
},

div: function(a,b) {
  if (b == undefined) {
    console.log("[Using Memeory] "+String(this.value)+" / "+String(a)+" = ");
    this.value /= a;
    return this.value;
  }
  console.log(String(a)+" / "+String(b)+" = ");
  this.value = a/b;
  return this.value;
},

exp: function(a,b) {
  if (b == undefined) {
    console.log("[Using Memeory] "+String(this.value)+" ^ "+String(a)+" = ");
    this.value = Math.pow(this.value, a);
    return this.value;
  }
  console.log(String(a)+" ^ "+String(b)+" = ");
  this.value = Math.pow(a, b);
  return this.value;
},

clear: function() {
  this.value = 0;
  console.log("Memory Cleared");
  return this.value;
},

master: function(expression) {

//
//  I orginally thpught I needed to make this generalized to accept arbitary
// math expression. Was going to do search string and recursively reduce using order of oprations
// JS eval function doesn't recognize exponent ^
//
//  using a hard coded function: ss = "(2 - 1) * (5 ^ 2)"
// where (a-b)*(c^d)


//       find ) then search back to find (
//     ss.indexOf(")") --> first closeing
//       ss.lastIndexOf(")",ss.indexOf(")"))

//    ss

//       extract substr, determine operation call appriote method
//
//      ss.substring(ss.lastIndexOf("(",ss.indexOf(")")),ss.indexOf(")")+1);
//
// console.log("Warning Experimental!");
// console.log(ss);
//
// for (var i=0;i<2;i++) {
//   pClose =  ss.indexOf(")")+1;
//   pOpen = ss.lastIndexOf("(",ss.indexOf(")"));
//   pSub = ss.substring(pOpen,pClose);
//   pStart = ss.substring(0,pOpen);
//   pEnd = ss.substring(pClose);
//   eve = eval(pSub);
//   ss = pStart+eve+pEnd;
//   console.log(ss);
// }

console.log(expression+' =');
expression = expression.replace('^','**');
return eval(expression);

},

help: function() {
  return "Supports: add, sub, mult, div, exp, clear, help, master";
}

}
