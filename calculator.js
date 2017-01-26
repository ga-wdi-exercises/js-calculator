var calculator = {
  firstElement : 0,
  operation : 0 ,
  secondElement : 0,
  result : 0,
}

var add = function(n1, n2) {
  console.log(n1 + n2);
};

var substract = function(n1, n2) {
  console.log(n1 - n2);
};

var multiply = function(n1, n2) {
  console.log(n1 * n2);
};

var devide = function (n1, n2) {
  console.log( n1 / n2);
};


$("#plus").on("click", function () {
    calculator['operation'] = add;
    console.log(calculator);
  });

$("#minus").on("click", function () {
    calculator[operation] = substract;
    console.log(calculator);
  });

$("#mult").on("click", function () {
    calculator[operation] = multiply;
    console.log(calculator);
  });

$("#divid").on("click", function () {
    calculator[operation] = devide;
    console.log(calculator);
  });
