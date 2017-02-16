document.querySelector("#clr").addEventListener("click", clear);
document.querySelector(".ajout").addEventListener("click", ajout);
document.querySelector("#e").addEventListener("click", egal)
function clear() {
    document.querySelector("#txt").value = "";
}
function ajout(ajouter){
	document.querySelector("#txt").value += ajouter;
}
function egal(){
	var formule = document.querySelector("#txt").value;
	document.querySelector("#txt").value = eval(formule);
}