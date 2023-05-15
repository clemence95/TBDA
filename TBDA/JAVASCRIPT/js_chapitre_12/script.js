let tableau =[]; //Initialise un tableau vide
let valeur = 1; // Initialise une variable valeur différente de 0

while(valeur !== 0){ //Si la valeur est strictement diffirente de 0
    valeur = parseFloat(window.prompt("Entrez une valeur numérique ( ou 0 pour arreter la saisie)")); // transformation en un ombre qui flotte (enléve les "")
    if(valeur !== 0 && !isNaN(valeur)){ //Si la valeur est strictement differente de 0
        tableau.push(valeur); // le tableau prend les valeurs saisies
        document.write("<li>"+valeur+"</li>");// Ajoute la valeur saisie à la liste HTML
    }
}
// Calcule le nombre de valeurs saisies, la somme et la moyenne
const nombreValeurs=tableau.length;
const somme = tableau.reduce((total,valeur) => total+valeur,0);
const moyenne = somme/nombreValeurs;

//Affiche le nombre de valeurs saisies, la somme et la moyenne
document.write("<p>Nombre de valeurs saisies : "+nombreValeurs+"</p>");
document.write("<p>Somme : "+somme+"<p>");
document.write("<p>Moyenne : "+moyenne+"<p>");