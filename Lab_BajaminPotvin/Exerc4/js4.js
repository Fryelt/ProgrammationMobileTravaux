//Fonction curseur non-fontionnelle !

//Association event depart
var titres = document.querySelectorAll("h1")
//compteur pour les ids
var compteur;
compteur = 2;
//tampons pour les inter-echanges
var titreO;
var parO;
var idO;
var titreN;
var parN;
var idN;
//check pour le curseur
var check = false;
for(var i=0;i<titres.length;i++){
  titres[i].addEventListener("click",cursor);
}
//fonction clique
function cursor(){
	if(check == false){
		idO = this.className;
		var titreT = document.querySelector("h1."+idO);
		var parT = document.querySelector("p."+idO);
		titreO = titreT.innerText;
		parO = parT.innerText;
		document.body.style.cursor="help";
		check = true;
	}
	else{
		idN = this.className;
		var titreT = document.querySelector("h1."+idN);
		var parT = document.querySelector("p."+idN);
		titreN = titreT.innerText;
		parN = parT.innerText;
		document.querySelector("h1."+idN).innerText = titreO;
		document.querySelector("p."+idN).innerText = parO;
		document.querySelector("h1."+idO).innerText = titreN;
		document.querySelector("p."+idO).innerText = parN;
		document.body.style.cursor="auto";
		check = false;
	}
}
function ajoutTxt(){
	//inputs
	var txtTitre = document.getElementById("t").value;
	var txtParagraphe = document.getElementById("par").value;
	//If pour verifier le contenu des inputs
	if (txtTitre == "" || txtParagraphe == "")
		alert("Please type something into these boxes");
	else
	{
	compteur++;
	//creation titre
	var titre = document.createElement("h1");
	titre.innerHTML=txtTitre;
	titre.classList.add(compteur);
	titre.addEventListener("click",cursor);
	//creation paragraphe
	var paragraphe = document.createElement("p");
	paragraphe.innerHTML=txtParagraphe;
	paragraphe.classList.add(compteur);
	var breakpoint = document.getElementById("breakpoint");
	//insertion
	document.body.insertBefore(titre, breakpoint);
	document.body.insertBefore(paragraphe, breakpoint);
	}
}