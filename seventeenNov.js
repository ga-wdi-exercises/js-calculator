let total;


let calculator = {

add: function (a,b){ //adds a and b
total = a+b;
console.log(total);
return total;
},
subtract: function (a,b){ // returns a - b
total = a-b;
console.log(total);
return total;
},
multiply: function (a,b){ // returns a * b
total = a*b;
console.log(total);
return total;
},
divide: function (a,b){ // returns a/b
total = a/b;
console.log(total);
return total;
},
power: function (a,b){ // returns a**b
total = Math.pow(a,b);
console.log(total);
return total;
},
// exponent: "a ** b",
// eval: "eval stuff"

// multiply: function() {
//   crayon.lengthInCM -= 0.5;
// }

};//calculator
