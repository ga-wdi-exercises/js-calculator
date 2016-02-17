var calculator = {
  value: 0,

  add: function(num)
  {
    this.value += num;
    return this.value;
  },

  subtract: function(num)
  {
    this.value -= num;
    return this.value;
  },

  multiply: function(num)
  {
    this.value *= num;
    return this.value;
  },

  divide: function(num)
  {
    this.value /= num;
    return this.value;
  },

  power: function(pow)
  {
    this.value = Math.pow(this.value, pow);
    return this.value;
  },

  remainder: function(num)
  {
    this.value = this.value % num;
    return this.value;
  },

  clear: function()
  {
    this.value = 0;
    return this.value;
  }
}
