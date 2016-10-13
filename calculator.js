

var calculator = {
  add: function(x,y){
    return x * y
  },
  minus: function(x,y){
    return x - y
  },
  multiply: function(x,y){
    return x * y
  },
  division: function(x,y){

    if (x > y){
      return (x / y)
    }else {
    return (y / x)
  }
},
  exponent: function(x,y){
    return Math.pow(x,y);
  },
  sqrt: function(x){
    return Math.sqrt(x);
  }
}
















  // minus: function(first,second){
  //   return first - second;
  //  }

// function myfunction(){
//    x = document.getElementById("one").nodeValue;
//   return document.getElementById("box").innerHTML = x;
// }

// function add2screen(){
// var x = document.getElementsByClassName("numbkey");
// console.log(x);
// var y = x.firstChild.nodeValue;
// console.log(y)
// document.getElementById("screen").innerHTML = y
// }

// from the beg





//
// function addnumber(){
// var numb1 = Number(prompt("Enter Your First Number"));
//
// if (numb1 !== NaN ){
//   calculator.first = numb1;
// }
// var number2 =Number(prompt("Enter Your Second Number"));
//
// if (numb2 !== NaN ){
//   calculator.first = numb2;
// }
//
// var operation = prompt("what operation you want to do: (+,-,/,*)"){
//   switch (operation) {
//     case "+":
//        answer = calculator.add
//        document.write("Your answer is" + answer)
//        break;
//        case "-":
//        var answer = calculator.minus
//       document.write("Your answer is" + answer)
//       break;
//     default:
//     alert("your done")
//     break;
//
//   }
// }
// }
//
// // console.log(calculator.first);
//
// document.getElementById('first').innerHTML = calculator.first;
// // writes the first number on the first box





// function getnumbs(){
//   calculator.first = 3;
// }
// document.getElementById('answer').innerHTML = x;

// function getnumbs(){
//   x = 3;
// }
// document.getElementById('answer').innerHTML = x;









// document.getElementById('check').innerHTML = calculator.first;
