console.log('Hello World')

var a,b,result;

function setValues()
{
  a = Number(document.getElementByID("a").value);
  b = Number(document.getElementByID("b").value);
}

function sum()
{
  setValues();
  result = a+b;
  alert ("The sum is "+result);
  }

function exp()
  {
    setValues();
    result = a**b;
    alert ("The result is "+result);
    }

function mult()
    {
      setValues();
      result = a*b;
      alert ("The product is "+result);
      }
function div()
      {
        setValues();
        result = a/b;
        alert ("The quotient is "+result);
        }
function sub()
      {
        setValues();
        result = a-b;
        alert ("The difference is "+result);
        }
