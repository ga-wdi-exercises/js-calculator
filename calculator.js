var calculator = {
    add: function(num1, num2) {
        var value = num1 + num2;
        this.value.push(value);
        console.log(value);
    },
    subtract: function(num1, num2) {
        var value = num1 - num2;
        this.value.push(value);
        console.log(value);
    },
    multiply: function(num1, num2) {
        var value = num1 * num2;
        this.value.push(value);
        console.log(value);
    },
    divide: function(num1, num2) {
        var value = num1 / num2;
        this.value.push(value);
        console.log(value);
    },
    exponent: function(base, power) {
        var value = base ** power;
        this.value.push(value);
        console.log(value);
    },
    remainder: function(num1, num2) {
        var value = num1 % num2;
        this.value.push(value);
        console.log(value);
    },
    value: [],
    clear: function() {
        this.value = [];
    }

}
