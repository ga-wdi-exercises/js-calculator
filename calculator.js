var calculator = {};
calculator.add = function(x,y){
    return x + y;
}
calculator.multiply = function(x,y){
    return x * y;
}
calculator.divide = function(x,y){
    return x / y;
}
calculator.exponent = function(x,y){
    return Math.pow(x,y);
    // x ^ y
}
calculator.max = function(x,y){
    return Math.max(x,y);
    //gives highest number of the two;
}
calculator.value = 0;
calculator.clear = function(){
    calculator.value = 0;
}
function calc(x,y,operation){
    //operation must be a string
    calculator.value = calculator[operation](x,y);
    return calculator.value;
}
