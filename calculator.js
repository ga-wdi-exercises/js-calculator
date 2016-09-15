var calculator = {
}
var num1,num2,result;
function setValues()
{
  num1 = Number(document.getElementById("num1").value);
  num2 = Number(document.getElementById("num2").value);
}
function sum()
{
  setValues();
  result = num1+num2;
  alert("Total:"+result)
}
function subtract()
{
  setValues();
  result = num1-num2;
  alert("Total:"+result)
}
function mult()
{
  setValues();
  result = num1*num2;
  alert("Total:"+result)
}
function div()
{
  setValues();
  result = num1/num2;
  alert("Total:"+result)
}
