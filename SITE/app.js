var titre = document.getElementById('titre');
var bouton = document.getElementById('bouton');

/*METTRE LE PRENOM DANS LE TITRE*/
if(localStorage.getItem("prenomDuVisiteur")){
titre.textContent = "Bonjour " + localStorage.getItem("prenomDuVisiteur") + " !";
}else{
  var prenom = prompt("Comment tu t'appelles ?");
  localStorage.setItem("prenomDuVisiteur", prenom);
}

/*CHANGER LA COULEUR DU FOND*/
bouton.addEventListener("click", function(){
  document.body.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  });
  