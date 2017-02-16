//random number generated
var rnd;
rnd = Math.floor((Math.random() * 6) + 1);
//function pour mettre l'image
afficherImage(rnd);
//add event listener here
document.querySelector(".e").addEventListener("click", changementImage)
//fonction pour changer l'image
function changementImage(direction){
	var imageId = parseInt(document.querySelector(".img").id);
	switch (direction){
		case "gauche":
			imageId -= 1;
			if (imageId == 0)
				imageId = 6;
			afficherImage(imageId)
			break;
		case "droite":
			imageId += 1;
			if (imageId == 7)
				imageId = 1;
			afficherImage(imageId)
			break;
	}
}
//fonction pour afficher
function afficherImage(nbr){
	var img = document.querySelector(".img");
	document.querySelector(".img").id = nbr.toString();
	document.querySelector(".img").src = "images/painting" + nbr + ".jpg";
}