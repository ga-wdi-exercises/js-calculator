let result = 0;

var calculator = {
    add: function (a, b) {
        if (b === undefined) {
            result = result + a;
        } else {
        result = a + b;
    }
        return result;
    },
    subtract: function (a, b) {
        if (b === undefined) {
            result = result - a;
        } else {
        result = a - b;
    }
        return result;
    },

    multiply: function (a, b) {
        if (b === undefined) {
            result = result * a;
        } else {
        result = a * b;
    }
        return result;
    },

    divide: function (a, b) {
        if (b === undefined) {
            result = result / a;
        } else {
        result = a / b;
    }
        return result;
    },

    exponent: function (a, b) {
        if (b === undefined) {
            result = Math.pow(result, a);
        } else {
        result = Math.pow(a,b);
    }
        return result;
    },

    remainder: function (a, b) {
        if (b === undefined) {
            result = result % a;
        } else {
        result = a % b;
    }
        return result;
    },
    reset: function() {
        result = 0;
        return result;
    }

};
