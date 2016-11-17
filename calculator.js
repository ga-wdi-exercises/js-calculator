var a,b,result;
function setValues(){
  a = Number(document.getElementById("a").value);
  b = Number(document.getElementById("b").value);
}
function sum(){
  setValues();
  result = a+b;
  alert ("The operation is equals to " + result);
}
function rest(){
  setValues();
  result = a-b;
  alert ("The operation is equals to " + result);
}
function multiply(){
  setValues();
  result = a*b;
  alert ("The operation is equals to " + result);
}
function divide(){
  setValues();
  result = a/b;
  alert ("The operation is equals to " + result);
}
function exp(){
  setValues();
  result = Math.pow(a,b);
  alert ("The operation is equals to " + result);
}

// = {
  //addition: var sum = function(a, b);{

  //};
  //subtraction: var rest = function(a, b);{

  //};
  //multiplication: var multiply = function(a, b);{

  //};
  //division: var divide = function(a, b);{

  //};
  //exponents: var exp = function(a, b);{

  //};
//};
//(Hint: Look up Javascript's Math object)//
//An operation of your choice!:;//


//document.getElementById ("calculator").innerHTML = "Lemme Go!";

//OR this for JQuery - use the above though//

//$(document).ready(function(){ $("calculator").text(Lemme Go!);});//

//$(document).ready(function(){$(#button).click(function(){$(#change_me).text("I have been changed")});
//});
