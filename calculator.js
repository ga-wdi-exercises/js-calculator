var calculator = {

add:function (num1, num2){
    return (num1+num2);
},

subtract:function (num1, num2){
    return (num1-num2);
},

multiply:function (num1, num2){
    return(num1*num2);
},

division:function(num1, num2){
    return(num1/num2);
},

exponent:function(num1, num2){
    return Math.pow(num1, num2);
},

squareroot:function(num1){
    return Math.sqrt(num1);
}
};

function getNum1(op){
    var numberOne = prompt("what is the first number you want to " + op);
    numberOne = parseInt(numberOne);
    return numberOne;
}

function getNum2(op){
    var numberTwo = prompt("what is the second number you want to " + op + " from");
    numberTwo = parseInt(numberTwo);
    return numberTwo;
}

function pickOperator(){
    var op = prompt("What operation do you want to be done on your calculator? add, subtract, multiply, divide, exponent, or squareroot");
    return op;
}

function getOperator(op, num1, num2){
    if(op === "add"){
        num1 = getNum1(op);
        if(typeof(num1)=== 'number'){
            num2 = getNum2(op);
           if(typeof(num2)==='number'){
              var result = calculator.add(num1,num2);
                console.log(result);
            }
            else{
                console.log("Error! That's a not a number. Pick Again!");
                getNum2(pickOperator());
            }
        }
        else{
            console.log("Error! That's a not a number. Pick Again!");
            getNum1(op);
        }

    }

    else if(op === "subtract"){
        num1 = getNum1(op);
        if(typeof(num1)==='number'){
            num2 = getNum2(op);
            if(typeof(num2)==='number'){
               var result2= calculator.subtract(num1, num2);
               console.log(result2);
            }
            else{
                console.log("Error! That's a not a number. Pick Again!");
                getNum2(op);
            }
        }
        else{
            console.log("Error! That's a not a number. Pick Again!");
            getNum1(op);
        }
    }

    else if(op === "multiply"){
        num1 = getNum1(op);
        if(typeof(num1)==='number'){
            num2 = getNum2(op);
            if(typeof(num2)==='number'){
                var result3 = calculator.multiply(num1, num2);
                console.log(result3);
            }
            else{
                console.log("Error! That's a not a number. Pick Again!");
                getNum2(op);
            }
        }
        else{
            console.log("Error! That's a not a number. Pick Again!");
            getNum1(op);
        }
    }

    else if(op === "divide"){
        num1 = getNum1(op);
        if(typeof(num1)==='number'){
            num2 = getNum2(op);
            if(typeof(num2)==='number'){
                var result4= calculator.divion(num1, num2);
                console.log(result4);
            }
            else{
                console.log("Error! That's a not a number. Pick Again!");
                getNum2(op);
            }
        }
        else{
            console.log("Error! That's a not a number. Pick Again!");
            getNum1(op);
        }
    }

    else if(op === "exponent"){
        num1 = getNum1(op);
        if(typeof(num1)==='number'){
            num2 = getNum2(op);
            if(typeof(num2)==='number'){
                var result5= calculator.exponent(num1, num2);
                console.log(result5);
            }
            else{
                console.log("Error! That's a not a number. Pick Again!");
                getNum2(op);
            }
        }
        else{
            console.log("Error! That's a not a number. Pick Again!");
            getNum1(op);
        }
    }

    else if(op === "squareroot"){
        num1 = getNum1(op);
        if(typeof(num1)==='number'){
             var result6 = calculator.squareroot(num1);
             console.log(result6);
        }
        else{
            console.log("Error! That's a not a number. Pick Again!");
            getNum1(op);
        }
    }

}

getOperator(pickOperator());
