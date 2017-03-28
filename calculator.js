var calculator = { }

var x = add (5,4);
function add (num1, num2) {
   return num1 + num2;
 }
x;

var x = sub(6,4);
function sub (num1, num2) {
   return num1 - num2;
 }
x;

var x = multiply (5,4);
function multiply (num1, num2) {
   return num1 * num2;
 }
x;

var x = division (6,3);
function division (num1, num2) {
  return num1 / num2;
}
x;

function exponent (num1, num2) {
    var sum = 1;
    for (num2; num2 > 0; num2--){
    sum = sum * num1 ;
  }
    return sum;
  }
exponent (6,2);


var i = 0;
var c = i++;
      c = ++i;

var i = 10;
var c = i++;
      c = ++i;
      c = --i;
      c = ++i + i++;
      c = ++i - i++;
      c = ++i * i++;
      c = ++i / i++;
alert(c);
