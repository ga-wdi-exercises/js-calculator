var calculator = {
	value : 0,
	add : function(num,num2) {
		if(num2 === undefined){
			num2 = value
		}
		var result = (num + num2)
		value = result
		return result
	},
	subtract : function(num,num2) {
		if(num2 === undefined){
			var result = value - num
			value = result
			return result
		}
		var result =(num - num2)
		value = result
		return result
	},
	multiply : function(num,num2){
		if(num2 === undefined){
			num2 = value
		}
		var result = num * num2
		value = result
		return result
	},
	divide : function(num,byNum2){
		if(byNum2 === undefined){
			var result = value/num
			value = result
			return result
		}
		var result = num/byNum2
		value = result
		return result
	},
	toThePowerOf  : function(num,power){
		if(power === undefined){
			var result = Math.pow(value,num)			
			value = result
			return result
		}
		var result = Math.pow(num,power)
		value = result
		return result
	},
	squareRoot : function(num){
		if(num === undefined){
			num = value
			var result = Math.sqrt(num)
			value = result
			return result	
		}
		var result = Math.sqrt(num)
		value = result
		return result
	},
	clear : function(){
		this.value = 0
		return "calculator cleared"
	}

};
