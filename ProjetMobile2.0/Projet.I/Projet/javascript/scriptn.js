var UL = document.querySelector("#ULsearch");
if (UL){
	document.querySelector("#ULsearch").addEventListener("onkeyup",searchList);
}
var chat = document.querySelector("#chat");
if (chat){
	document.querySelector("#chat").addEventListener("onclick",chat);
}
function navI(object){
	document.getElementById(object).style.backgroundColor = "#759DB8";
	document.getElementById(object).style.color = "white";
}
function navO(object){
	document.getElementById(object).style.backgroundColor = "#757A8A";
	document.getElementById(object).style = "grey";
}
function searchList(){
	var search, filter, ul, li, a, ind;
	search = document.getElementById("search");
	filter = search.value.toUpperCase();
	ul = document.getElementById("UL");
	li = document.getElementById("UL").getElementsByTagName("li");
	for (ind = 0; ind < li.length; ind++){
		a = li[ind].getElementsByTagName("a")[0];
		if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[ind].style.display = "";
        } else {
            li[ind].style.display = "none";
        }
	}
}
function insert(){
	var txt, para, utilisateur;
	txt = document.getElementById("texte");
	if(txt.value.length > 0){
	para = document.getElementById("chat");
	utilisateur = "Nom d'utilisateur";
	para.innerHTML += utilisateur + " : " + txt.value + "\n";
	document.getElementById("texte").value = "";
	document.getElementById("texte").focus();
	document.getElementById("texte").select();
	}
}
function verif(f){
	var NomOk = verifNom(f.Nom);
	var EmailOk = verifEmail(f.Email);
	var AgeOk = verifAge(f.Age);
	var MdP1ok = verifAge(f.MdP1);
	var MdP2Ok = verifAge(f.MdP2);
	if(NomOk && EmailOk && AgeOk && MdP1ok && MdP2Ok)
	{
		alert("Envoie complet");
		return true;
	}
	else {
		alert("Veuillez remplir correctement tous les champs");
		return false;
	}
}
function surligne(champ, erreur){
	if(erreur)
		champ.style.backgroundColor="#fba";
	else
		champ.style.backgroundColor="rgb(248, 247, 255)";
}
function CheckT(e){
	var touche;
	touche = e.keyCode || e.which;
	if(touche == 13){
		statu();
		}
}
function statu(){
	var txt, para;
	txt = document.getElementById("status");
	if(txt.value.length > 0){
		para = document.getElementById("profil");
		para.innerHTML = txt.value + "\n";
		document.getElementById("status").value = "";
		document.getElementById("status").focus();
		document.getElementById("status").select();
	}
}
function verifNom(champ){
	if(champ.value.length < 2 || champ.value.length > 25){
		surligne(champ, true)
		return false;
	}
	else{
		surligne(champ, false)
		return true;
	}
}
function verifAge(champ){
	var age;
	age = parseInt(champ.value);
	if(isNaN(age) || age < 18 || age > 40) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}
function verifEmail(champ){
	var regex;
	regex = /ˆ[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}˙[a-z]{2,4}$/;
	if(!regex.test(champ.value)) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}
function verifMdP1(champ){
	if(champ.value.length < 6 || champ.value.length > 16){
		surligne(champ, true)
		return false;
	}
	else{
		surligne(champ, false)
		return true;
	}
}
function verifMdP2(champ){
	var MdP1, MdP2;
	MdP1 = document.getElementById("MdP1").value
	MdP2 = champ.value;
	if(MdP2 != MdP1){
		surligne(champ, true)
		return false;
	}
	else{
		surligne(champ, false)
		return true;
	}
}