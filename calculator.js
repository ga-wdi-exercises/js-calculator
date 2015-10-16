// addition
function add(numbers){
  var result=0;
  // result=numbers1+numbers2;
  for(var i=0; i<numbers.length; i++){
    result +=numbers[i];
    console.log(result);
  }
   return result;
}

// subtraction
function subtract(numbers){
  var result=0;
  for(var i=0; i<numbers.length; i++){
    result -=numbers[i];
    console.log(result);

    }
}

// Multiplication
function multiply(numbers){
  var result=0;
  for(var i=0; i<numbers.length; i++){
    result *=numbers[i];
    console.log(result);

    }
return result;
}

// Division
function divide(number1, number2){
  var result=0;
  result=number1/number2;
return result;
}
// Exponent calculation
function exponent(number){
  var result
  result=Math.exp(number);
  return result;
}

document.write("test message");
// testing command
//document.write(calculator.add(3,5));
