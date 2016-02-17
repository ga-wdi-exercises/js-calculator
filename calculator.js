var calculator = {
  value: null,

  addition: function (num1, num2){
    this.value = num1 + num2;
    return this.value;
  },

  subtraction: function(num1, num2){
    this.value = num1 - num2;
    return this.value;
  },

  multiplication: function(num1, num2){
    this.value = num1 * num2;
    return this.value;
  },

  division: function(num1, num2){
    this.value = num1 / num2;
    return this.value;
  },

  exponents: function(num1, num2){
    this.value = Math.pow(num1, num2);
    return this.value;
  },

  rand1to10: function(){
    var test = Math.random();
    if(test < 0.1){this.value = 1;}
    else if (test < 0.2){this.value = 2;}
    else if (test < 0.3){this.value = 3;}
    else if (test < 0.4){this.value = 4;}
    else if (test < 0.5){this.value = 5;}
    else if (test < 0.6){this.value = 6;}
    else if (test < 0.7){this.value = 7;}
    else if (test < 0.2){this.value = 8;}
    else if (test < 0.2){this.value = 9;}
    else {this.value = 10;}
    return this.value;
  },

  clear: function(){
    this.value = null;
  },

  master: function(expression){
    this.value = eval(expression);
    return this.value;
  },

  master2: function(exp/*ression*/){
    /*var resolveFirst, resolveLast;
    if(!isNan(Number(exp))){return Number(exp);}
    for(i=0; i<exp.length; i++){
      if(expression.charAt(i)=='*'){

      }
    }*/

    /*var leftSide, rightSide, operand;
    expression.replace(' ','');

    if (!isNaN(Number(expression))) {
      console.log('returning: ' + expression);
      return Number(expression);
    }

    for (i = 0; i < expression.length; i++){
      if ((expression.charAt(i) == '+') || (expression.charAt(i) == '-')){
        leftSide = expression.substr(0 , i);
        rightSide = expression.substr(i+1, expression.length);
        console.log("Calling addition/subtraction on: (" + leftSide + ") " + expression.charAt(i) + " (" + rightSide + ")");
        if (expression.charAt(i) == '+'){
          return this.addition(this.master2(leftSide), this.master2(rightSide));
        }
        else {
          return this.subtraction(this.master2(leftSide), this.master2(rightSide));
        }
      }
    }

    for (i = 0; i < expression.length; i++){
      if ((expression.charAt(i) == '*') || (expression.charAt(i) == '/')){
        leftSide = expression.substr(0 , i);
        rightSide = expression.substr(i+1, expression.length);
        console.log("Calling multi/divide on: (" + leftSide + ") " + expression.charAt(i) + " (" + rightSide + ")");
        if (expression.charAt(i) == '*'){
          return this.multiplication(this.master2(leftSide), this.master2(rightSide));
        }
        else {
          return this.division(this.master2(leftSide), this.master2(rightSide));
        }
      }
    }*/

  }

};
