
// var value = 0;

var calculator = {
  value: 0,
  addition: function(num) {
    console.log(this.value = num + this.value);
  },
  subtraction: function(num) {
    console.log(this.value = num - this.value);
  },
  multiplication: function(num) {
    console.log(this.value = num * this.value);
  },
  division: function(num) {
    console.log(this.value = num / this.value);
  },
  exponents: function(num) {
    console.log(this.value = num ** this.value);
  },
  modulus: function(num) {
    console.log(this.value = num % this.value);
  },
  clear: function () {
    console.log(this.value = 0);
  }
}

calculator.addition(3);
calculator.multiplication(4);
calculator.clear();
calculator.addition(2);
calculator.exponents(6);
calculator.modulus(4);
