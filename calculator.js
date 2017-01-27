var value =0;

var calculator2 = {
	add: function(x,y){
		console.log(x+y);
	},
	add: function(x){
		
	}
	subtract: function(x,y){
		console.log(x-y);
	},
	multiply: function(x,y){
		console.log(x*y);
	},
	divide: function(x,y){
		console.log(x/y);
	},
	exponent: function(x,y){
		console.log(x**y);
	},
	sqrt: function(x){
		console.log(Math.sqrt(x));
	}
}

var calculator = {
	add: function(...numbers){
	  for (var i=0; i< numbers.length; i++){
      value+= numbers[i];
      console.log(value);
	  }
	  console.log("The addition of your numbers is: "+value);
  	},
	subtract: function(...numbers){
	  for (var i=0; i< numbers.length; i++){
      value-= numbers[i];
      console.log(value);
	  }
	  console.log("The subtraction of your numbers is: "+value);
  	},
	multiply: function(...numbers){
		if(value ===0){
			value =1;
		}
	  for (var i=0; i< numbers.length; i++){
      value*= numbers[i];
      console.log(value);
	  }
	  console.log("The multiplication of your numbers is: "+value);
  	},
	divide: function(...numbers){
	  for (var i=0; i< numbers.length; i++){
	  if(numbers[i]===0){
	  	return console.log("Can not divide by zero");
	  }	
      value/= numbers[i];
      console.log(value);
	  }
	  console.log("The division of your numbers is: "+value);
  	},
	exponent: function(x,y){
		value = x**y;
		console.log(value);
	},
	sqrt: function(x){
		value = math.sqrt(x);
		console.log(value);
	},
	clear: function(){
		value=0;
	}
}

