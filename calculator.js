var calculator = {
    add: function(n1, n2) {
        return n1 + n2;
    },
    subtract: function(n1, n2) {
        return n1 - n2;
    },
    multiply: function(n1, n2) {
        return n1 * n2;
    },
    divide: function(n1, n2) {
        if (n2 === 0) {
            console.log("Can't divide by zero");
            return NaN;
        }
        return n1 / n2;
    },
    pow: function(n1, n2) {
        return Math.pow(n1, n2);
    }
}

