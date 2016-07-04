var calculate = {
  //avlue store
    value: 2,
  //addition
    add: function(num1,num2) {
      if (num2 === undefined) {
  //code for value being added to num1
        return num1 + calculate.value;
      }
      else {
          return num1 + num2
        }
    },
  //subtraction
    subtract: function(num1,num2) {
      return num1 - num2
    },
    //multiplication
    multiply: function(num1,num2) {
      return num1 * num2
    },
    //division
    divide: function(num1,num2) {
      return num1 / num2
    },
    //exponenets
    powerOf: function(num1,num2) {
      return Math.pow(num1, num2);
    },


  };
