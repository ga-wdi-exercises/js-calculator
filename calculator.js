var calculator = {
    value: 0,
    add: function(num1, num2) {
        if (num2 === undefined) {
            num2 = this.value;
        }
        let returnValue = num1 + num2;
        this.value = returnValue;
        return returnValue;

    },
    subtract: function(num1, num2) {
        if (num2 === undefined) {
            num2 = this.value;
        }
        let returnValue = num2 - num1;
        this.value = returnValue;
        return returnValue;
    },
    multiply: function(num1, num2) {
        if (num2 === undefined) {
            num2 = this.value;
        }
        let returnValue = num2 * num1;
        this.value = returnValue;
        return returnValue;
    },
    divide: function(num1, num2) {
        if (num2 === undefined) {
            num2 = this.value;
        }
        let returnValue = num2 / num1;
        this.value = returnValue;
        return returnValue;
    },
    exponent: function(base, power) {
        if (power === undefined) {
            power = base;
            base = this.value
        }
            let returnValue = base ** power;
            this.value = returnValue;
            return returnValue;
    },
    remainder: function(num1, num2) {
        if (num2 === undefined) {
            num2 = this.value;
        }
        let returnValue = num2 % num1;
        this.value = returnValue;
        return returnValue;
    },
    clear: function() {
        this.value = 0;
        let returnValue = this.value;
        return returnValue;
    }

}
