
// var entry = [];
// var newEntry;
//
// $(document).on("ready", function() {
//
//
//
// $(".digit").on("click", function() {
//     console.log($(this).html());
//     entry.push($(this).html());
//     newEntry = parseInt(entry.join(''));
//     $(".result").html(newEntry);
// })
//
// })

var keys;
var input;
var inputVal;
var btnVal;

$(document).on("ready", function() {

var keys = $(".calculator div");

keys.on("click", function() {
    var input = $(".screen").val();
    var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;

    if(btnVal == 'C') {
		input.innerHTML = '';
	}

    if(btnVal == '=') {
		var equation = inputVal;

		equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

		if(equation)
			input.innerHTML = eval(equation);
	}

    else {
		input.innerHTML += btnVal;
	}
	console.log('clicked');
})

})
