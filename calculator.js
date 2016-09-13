var calculator = {
  add: function ( num1, num2 ){
    console.log( num1 + num2 );
    return num1 + num2;
  },
  subtraction: function (num1, num2) {
    console.log( num1 - num2 );
    return num1 - num2;
  },
  multiplication: function (num1, num2) {
    console.log( num1 * num2);
    return num1 * num2;
  },
  division: function ( num1, num2) {
    console.log( num1 % num2);
    return num1 % num2;
  },
 raisepower: function ( num1, num2 ) {
   console.log(num1 ** num2);
   return num1 ** num2;
 },
 square: function ( num1) {
   console.log(num1 * num1);
   return num1 * num1;
 }
}

calculator.add(3, 5)
calculator.subtraction(9, 5)
calculator.multiplication(3, 6)
calculator.subtraction(23, 11)
calculator.raisepower(4, 3)
calculator.square(4)
