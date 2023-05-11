function AddElement(event) { //Ajoute les éléments
  event.preventDefault(); // Si les éléments ne sont pas gérer preventdefault bloque toute saisie 

  let IdElement = document.getElementById("plat"); // renvoie tous les elements saisies 

  console.log(IdElement.value); // affiche sur la console les valeurs saisies

  let ligne = document.createElement('tr'); // crée une ligne
  let cellule = document.createElement('td'); //crée une cellule

  cellule.innerHTML = IdElement.value; // defenit une cellule Html parent
  ligne.appendChild(cellule); //Definit une ligne html enfant

  let IdTableau = document.getElementById("body"); // recupére l'id du tableau et les éléments du body

  IdTableau.appendChild(ligne); // ajoute l'élément au tableau
}