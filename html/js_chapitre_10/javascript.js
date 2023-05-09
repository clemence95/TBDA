// Demande à l'utilisateur de saisir la taille du tableau
var tailleTableau = prompt("Entrez la taille du tableau:");

// Convertit la réponse en nombre entier
tailleTableau = parseInt(tailleTableau);

// Initialise le tableau
var tableau = [];

// Boucle pour demander à l'utilisateur de saisir les valeurs du tableau
for (var i = 0; i < tailleTableau; i++) 
var valeur = prompt("Entrez une valeur:");

// Ajoute la valeur à la fin du tableau
tableau.push(valeur);

// Affiche le contenu du tableau
console.log(tableau);