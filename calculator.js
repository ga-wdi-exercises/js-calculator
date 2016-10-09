

var calcValue= '';
var result = "";
var calculation = '';

function addOperator(operator){
  addResult();
  calculation += operator;
  document.getElementById('result').innerHTML = calculation;
  document.getElementById('entry').value = '';
}

function addResult () {
  calculation += calcValue;
  document.getElementById('result').innerHTML = calculation;
  calcValue = '';
}

function random() {
  var number = Math.random().toFixed(2)*100;
  calcValue = number;
  document.getElementById('entry').value = calcValue;
}

function deleteEntry() {
  calcValue= '';
  document.getElementById('entry').value = calcValue;
}

//Functions-------------------------------------------------------

function startCalculator () {
  calcValue = document.getElementById('entry').value;
  document.getElementById('result').innerHTML = 'Result';
}

function addValue (number) {

  if (calcValue == '0'){
    calcValue = "";
  }

  calcValue += number;
  document.getElementById('entry').value = calcValue;
}

function clearCalculator() {
  calcValue = "";
  result = "";
  calculation = ''
  document.getElementById('entry').value = calcValue;
  document.getElementById('result').innerHTML = '';
}

function solve() {
  addResult();
  var oldResult = calculation;
  document.getElementById('result').innerHTML = oldResult + ' = ' + eval(calculation);
  calculation = eval(calculation);
  deleteEntry();
}


// function addResult () {
//
// }

// var calculator = {
  // add:

  // function additionFunc() {
  //
  // }
  //
  // // subtract:
  // function subtractionFunc() {
  //
  // }
  //
  // // multiply:
  // function multiplicationFunc() {
  //   addResult();
  //   result += '*';
  //   eval(result);
  //   document.getElementById('result').innerHTML = result;
  //   document.getElementById('entry').value = '';
  // }
  //
  // // divide:
  // function divisionFunc() {
  //
  // }
// }
