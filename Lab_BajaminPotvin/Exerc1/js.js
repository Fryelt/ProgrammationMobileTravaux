function table(){
	var numero = document.getElementById("t").value;
	var multiples = document.querySelectorAll("LI");
	for (var i = 0; i < 9; i++){
		multiples[i].innerHTML = numero + " * " + (i + 1) + " = " + (numero*(i + 1));
	}
}