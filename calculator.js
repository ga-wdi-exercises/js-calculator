        // 201701250809L EL MIERCOLES GIRO
        // https://github.com/ga-wdi-exercises/js-calculator
        // Javascript Calculator
            // Your task is to create a Javascript object that represents a calculator. It should have methods that provide it with the following functionality...
                // Addition
                // Subtraction
                // Multiplication
                // Division
                // Exponents (Hint: Look up Javascript's Math object)
            // An operation of your choice!
            // You should be able to run these methods like so from your browser's Javascript console...
            // apple + option + J
            // calculator.add(1,2);
            // // => 3

// ============================================
    // CALCULATOR BASIC USING JAVASCRIPT OBJECT
var calculator = {
value: 0,
add:  function (x,y) {
    varAdd = 0;
        if (x && y) {
          this.value = ( this.value + x + y);
                    console.log(' if add, x + y: ' + ' x: ' + x + ' y: ' + y);
                  varAdd = this.value;
          return  varAdd;
        }
         // return this.value;}
        // else if ((x)  && (y === false)) {
        else if (x) {
                  // console.log(' got inside else if' );
          this.value = ( this.value + x );
                  // console.log(' inside else if add w x only: ' + ' x: ' + x );
                  varAdd = this.value;
          return  varAdd;
        }
        else {
                  // console.log(' got abso nada but orig this.value: ' + this.value );
          return  varAdd;
        }
            // calculator.value = calculator.value + this.value;
            //       console.log(' calculator value: ' + calculator.value );
    }
,
subtract:  function (x,y) {
  varSubtract = 0;
        if (x && y) {
          this.value = ( this.value + (x - y));
                    console.log(' if subtract, x + y: ' + ' x: ' + x + ' y: ' + y);
                  varSubtract = this.value;
          return  varSubtract;
        }
         // return this.value;}
        // else if ((x)  && (y === false)) {
        else if (x) {
                   console.log(' got inside else if' );
          this.value = ( this.value - x );
                   console.log(' inside else if subtract w x only: ' + ' x: ' + x );
                  varSubtract = this.value;
          return  varSubtract;
        }
        else {
                   console.log(' got abso nada but orig this.value: ' + this.value );
          return  varSubtract;
        }
    }
,
multiply:  function (x,y) {
  varMultiply = 0;
        if (x && y) {
          this.value = ( this.value + (x * y));
                    console.log(' if multiply, x * y: ' + ' x: ' + x + ' y: ' + y);
                  varMultiply = this.value;
          return  varMultiply;
        }
         // return this.value;}
        // else if ((x)  && (y === false)) {
        else if (x && (y === undefined)) {
                  // console.log(' got inside else if' );
          this.value = (x );
                  // console.log(' inside else if multiply w x only: ' + ' x: ' + x );
                  varMultiply = this.value;
          return  varMultiply;
        }
        else {
                  // console.log(' got abso nada but orig this.value: ' + this.value );
          return  varMultiply;
        }
    }
,
divide:  function (x,y) {
  varDivide = 0;
        if (x && y) {
          this.value = ( t(x / y));
                    console.log(' if divide, x / y: ' + ' x: ' + x + ' y: ' + y);
                  varDivide = this.value;
          return  varDivide;
        }
         // return this.value;}
        // else if ((x)  && (y === false)) {
        else if (x && (y === undefined)) {
                  // console.log(' got inside else if' );
          this.value = (x );
                  // console.log(' inside else if divide w x only: ' + ' x: ' + x );
                  varDivide = this.value;
          return  varDivide;
        }
        else {
                  // console.log(' got abso nada but orig this.value: ' + this.value );
          return  varDivide;
        }
    }
,
power:  function (x,y) {
  varPower = 0;
        if (x && y) {
          this.value = Math.pow(x,y);
                    console.log(' if power, x ** y: ' + ' x: ' + x + ' y: ' + y);
                  varPower = this.value;
          return  varPower;
        }
         // return this.value;}
        // else if ((x)  && (y === false)) {
        else if (x && (y === undefined)) {
                  // console.log(' got inside else if' );
          this.value = Math.pow(x,1);
                  // console.log(' inside else if power w x only: ' + ' x: ' + x );
                  varPower = this.value;
          return  varPower;
        }
        else {
                  // console.log(' got abso nada but orig this.value: ' + this.value );
          return  varPower;
        }
    }
}
// calculator.add(4,2);
// calculator.subtract(2,3);
// calculator.divide(2,3);
// calculator.multiply(2,3);
calculator.power(2,2);
// calculator.power(2);

// calculator.divide(2,3);
// calculator.add(5);
// calculator.add();
// calculator.value

// ============================================
    // TASK BASIC
        // var calculator(x,) = {}
        // var add       = function(int1, int2) { return int1 + int2;  }
        // var subtract  = function(int1, int2) { return int1 - int2;  }
        // var multiply  = function(int1, int2) { return int1 * int2;  }
        // var divide    = function(int1, int2) { return int1 / int2;  }
        // var power     = function(int1, int2) { return int1 ** int2; }

    // ============================================
    // TASK BONUS `1`
        // var add = function(int1, int2) { var var_add = int1 + int2;  return var_add}
        // var add = function(int1, int2) { var var_add = int1 + int2;  return var_add}
