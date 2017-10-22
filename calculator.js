
// // class Calculator {
//   this.value = '';
//
//   add(a, b) {
//     console.log(a+b);
//     return a+b;
//   }
//   subtract(a, b) {
//     console.log(a-b);
//     return a-b;
//   }
//   multiply(a, b) {
//     console.log(a*b);
//     return a*b;
//   }
//   divide(a, b) {
//     console.log(a/b);
//     return a/b;
//   }
//   exponential(a, b) {
//     console.log(Math.pow(a, b));
//     return Math.pow(a, b);
//   }
//   sqrt(a) {
//     console.log(Math.sqrt(a));
//     return Math.sqrt(a);
//   }
//   clear() {
//     this.value = '';
//   }
// }

class Calculator {

  constructor() {
    this.value = 0;
  }

  add(a) {
    this.value = this.value + a;
    console.log(this.value);
    return this.value;
  }
  subtract(a) {
    this.value = this.value - a;
    console.log(this.value);
    return this.value;
  }
  multiply(a) {
    this.value = this.value * a;
    console.log(this.value);
    return this.value;
  }
  divide(a, b) {
    this.value = this.value / a;
    console.log(this.value);
    return this.value;
  }
  exponential(a) {
    this.value = Math.pow(this.value, a);
    console.log(this.value);
    return this.value;
  }
  sqrt() {
    this.value = Math.sqrt(this.value);
    console.log(this.value);
    return this.value;
  }
  clear() {
    this.value = 0;
  }
}

// var myCalc = new Calculator();
//
// myCalc.add(1,2);
// //return 3
// myCalc.subtract(10,3);
// //return 7
// myCalc.multiply(2,6);
// myCalc.divide(10,2);
// myCalc.exponential(2,3);
// myCalc.sqrt(25);

var myCalc2 = new Calculator();
console.log(myCalc2.value);
myCalc2.add(1);
myCalc2.add(2);
myCalc2.add(2);
myCalc2.multiply(2);
myCalc2.divide(5);
myCalc2.exponential(4);
myCalc2.sqrt();
