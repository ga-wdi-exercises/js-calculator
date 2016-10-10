var calculator = {
  add: function(x,y) {
    console.log(x+y)},

  subtract: function(x,y) {
    console.log(x-y)
  },
  multiply: function(x,y) {
    console.log(x*y)
  },
  divide: function(x,y) {
    console.log(x/y)
  },
  exponent: function(x,y) {
    console.log(Math.pow(x,y))
  },
  //takes one argument and calculates 2016 tax liability based on AGI
  tax: function(income) {
    if (income <= 9275) {
      console.log("$" + (income * .1))}
      if (income <= 37650 && income > 9275) {
        console.log("$" + (((income - 9275)*.15)+927.5))
      }
      if (income <= 91150 && income > 37650) {
        console.log("$" + (((income - 37650)*.25)+5183.75))
      }
      if (income <= 190150 && income > 91150) {
        console.log("$" + (((income - 91150)*.28)+18558.75))
      }
      if (income <= 413350 && income > 190150) {
        console.log("$" + (((income - 190150)*.33)+46278.75))
      }
      if (income <=415050 && income > 413350) {
        console.log("$" + (((income - 413350)*.35)+119934.75))
      }
      if (income > 415050) {
        console.log("$" + (((income - 413350)*.396)+120529.75))
      }
    }
  }
