//déclaration de l'event pour la salle de discussion et de la liste de recherche
var UL = document.querySelector("#ULsearch");
if (UL){
	document.querySelector("#ULsearch").addEventListener("onkeyup",searchList);
}
var chat = document.querySelector("#chat");
if (chat){
	document.querySelector("#chat").addEventListener("onclick",chat);
}
//lorsque le curseur est sur le menu
function navI(object){
	document.getElementById(object).style.backgroundColor = "#759DB8";
	document.getElementById(object).style.color = "white";
}
//lorsque le curseur quite le menu
function navO(object){
	document.getElementById(object).style.backgroundColor = "#757A8A";
	document.getElementById(object).style = "grey";
}
//Une fonction qui prend le texte d'un input, l'accumule dans le textarea
//avec des strings, des variables et un \n pour changer de ligne
function insert(){
	var txt, para, utilisateur;
	txt = document.getElementById("texte");
	if(txt.value.length > 0){
	para = document.getElementById("chat");
	utilisateur = "Nom d'utilisateur";
	para.innerHTML += utilisateur + " : " + txt.value + "\n";
	document.getElementById("texte").value = "";
	//On refocus sur le input texte
	document.getElementById("texte").focus();
	document.getElementById("texte").select();
	}
}
//
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
//Pour regarder si la touch fut 'entrée' ( = 13)
function CheckT(e){
	var touche;
	touche = e.keyCode || e.which;
	if(touche == 13){
		statu();
		}
}
//Affectation du message de status
function statu(){
	//la variable txt pour ce que l'utilisateur envoie, le para pour la section de status
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
//Ici, on à toutes les fonctions pour vérifier le formulaire
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
//vérification de l'âge
function verifAge(champ){
	var age;
	//convertion en int car on veut le nombre
	age = parseInt(champ.value);
	if(isNaN(age) || age < 15 || age > 40) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}
//vérification de l'email pour une mise en forme similaire au placeholder
function verifEmail(champ){
	var regex;
	//regex adapté, celui donné en cours n'étant pas fonctionnel
	regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(champ.value)) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}
//similaire à la fonction verifNom
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
//Comparaison du deuxième mot de passe avec le premier
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
//function se surlignage de champs non-remplis dans le formulaire
function surligne(champ, erreur){
	if(erreur)
		champ.style.backgroundColor="#fba";
	else
		champ.style.backgroundColor="rgb(248, 247, 255)";
}
//Vérification de TOUS les champs quand le bouton de confirmation est activé
function verif(f){
	var NomOk = verifNom(f.Nom);
	var EmailOk = verifEmail(f.Email);
	var AgeOk = verifAge(f.Age);
	var MdP1Ok = verifMdP1(f.MdP1);
	var MdP2Ok = verifMdP2(f.MdP2);
	if(NomOk && EmailOk && AgeOk && MdP1Ok && MdP2Ok)
	{
		alert("Envoie complet");
		return true;
	}
	else {
		alert("Veuillez remplir correctement tous les champs");
		return false;
	}
}