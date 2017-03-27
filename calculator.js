
/Store Global Variable/
var memory = 4;


/Function to reset memory to 0/
var clearMemory = function() {
	memory = 0;
}:

var calculator = {
	multiply: function(num1){
		memory = memory * num1;
		return memory;
	},

	subtract: function(num1) {
		memory = memory - num1;
		console.log(memory - num2);
		return memory;
	},

	add: function(num1) {
		memory = memory + num1;
		console.log(memory + num1);
		return memory;
	},

	divide: function(num1) {
		memory = (memory / num1);
		console.log(memory / num1);
		return memory;
	},

	remainder: function(num1) {
		memory = (memory % num1);
		console.log(memory % num1);
		return memory;
	},

}


