var calculator = {
  add: function(...nums) {
    switch (nums.length) {
      case 1:
        this.value += nums[0];
        return 'value is ' + this.value;
      case 2:
        return nums[0] + nums[1];
      default:
        return this.error;
    }
  },
  subtract: function(...nums) {
    switch (nums.length) {
      case 1:
        this.value -= nums[0];
        return 'value is ' + this.value;
      case 2:
        return nums[0] - nums[1];
      default:
        return this.error;
    }
  },
  multiply: function(...nums) {
    switch (nums.length) {
      case 1:
        this.value *= nums[0];
        return 'value is ' + this.value;
      case 2:
        return nums[0] * nums[1];
      default:
        return this.error;
    }
  },
  divide: function(...nums) {
    switch (nums.length) {
      case 1:
        this.value /= nums[0];
        return 'value is ' + this.value;
      case 2:
        return nums[0] / nums[1];
      default:
        return this.error;
    }
  },
  power: function(...nums) {
    switch (nums.length) {
      case 1:
        this.value **= nums[0];
        return 'value is ' + this.value;
      case 2:
        return nums[0] ** nums[1];
      default:
        return this.error;
    }
  },
  modulo: function(...nums) {
    switch (nums.length) {
      case 1:
        this.value %= nums[0];
        return 'value is ' + this.value;
      case 2:
        return nums[0] % nums[1];
      default:
        return this.error;
    }
  },
  error: 'I only accept one or two arguments',
  value: 0,
  clear: function() {
    this.value = 0;
    return 'value is ' + this.value;
  },
  evaluate: function(string) {
    return eval(string);
  }
}
