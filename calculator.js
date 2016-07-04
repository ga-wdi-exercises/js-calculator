var calculate = {
  //avlue store
    value: 0,
  //addition
    add: function(num1,num2) {
      if (num2 === undefined) {
  //code for value being added to num1;
        calculate.value = num1 + calculate.value;
        return calculate.value
      }
      else {
          return num1 + num2
        }
    },
//subtraction
  subtract: function(num1,num2) {
    if (num2 === undefined) {
//code for num1 being subtracted from stored value first (opposite of addtion)
      calculate.value = calculate.value - num1;
      return calculate.value
    }
    else {
      //this code remains semantically ordered since it does not involve stored value being subtracted from
        return num1 - num2
      }
  },
    //multiplication
    multiply: function(num1,num2) {
      if (num2 === undefined) {
  //make sure stored value is first
        calculate.value = calculate.value * num1;
        return calculate.value
      }
      else {
          return num1 * num2
        }
    },
  //division
    divide: function(num1,num2) {
      if (num2 === undefined) {
  //put stored valued first
        calculate.value = calculate.value / num1;
        return calculate.value
      }
      else {
          return num1 / num2
        }
    },
  //exponenets
  //  powerOf: function(num1,num2) {
    //  return Math.pow(num1, num2);
    powerOf: function(num1,num2) {
      if (num2 === undefined) {
  //code Math.pow of stored value
        return Math.pow(calculate.value, num1)
      }
      else {
          return Math.pow(num1,num2);
        }
    }

  };
