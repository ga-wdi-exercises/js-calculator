var calculator = {
add: function(num1,num2){
	return num1 + num2;
},
subtract: function(num1,num2){
	return num1 - num2;
},
multiply: function(num1,num2){
	return num1 * num2;
},
divide: function(num1,num2){
	return num1 / num2;
},
power: function(num1,num2){
	return Math.pow(num1, num2);
},
absolute: function(num1){
	return Math.abs(num1);
}
}
