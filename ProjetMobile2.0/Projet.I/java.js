function verifier(f){
	var nomK = verifPseudo(f.nom);
	var ageK = verifAge(f.age);
	var emailK = verifMail(f.email);
	alert("" + nomK + emailK + ageK);
	if(nomK && emailK && ageK){
		alert("Formulaire envoyé");
		return true;
	}
	else{
		alert("Vous avez oublier des champs !");
		return false;
	}
}
function surligne(champ, erreur){
	if(erreur)
		//Change à la couleur rouge si erreur==true
		champ.style.backgroundColor = "#fba";
	else
		//remet à défault sinon
		champ.style.backgroundColor = "";
}
function verifPseudo(champ){
	//Vérif le nombre de caractères
	if(champ.value.length < 5 || champ.value.length > 20) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}
function verifMail(champ){
	// !retourne toujours false!
	//variable regex pour le test
	var regex = /ˆ[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}˙[a-z]{2,4}$/;
	//le test en question
	if(!regex.test(champ.value)){
		surligne(champ, true);
		return false;
	}
	else{
		surligne(champ, false);
		return true;
	}
}
function verifAge(champ) {
	//conversion du string en int
	var age = parseInt(champ.value);
	//test pour le int
	if(isNaN(age) || age < 18 || age > 35) {
		surligne(champ, true);
		return false;
	}
	else {
		surligne(champ, false);
		return true;
	}
}