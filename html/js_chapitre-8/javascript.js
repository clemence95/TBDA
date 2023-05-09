// Exercice 1
var prenom = "prenom"; //type "chaine"
i = 0
while (prenom != "") // boucle while(condition vraie)
{// Si la condition (prenom different à "" Alors;)
    prenom = prompt("Entrez le prenom N°" + i);//Demande prenom n°1 à l'utilisateur
    i++; //(i=0)+(i=0) à chaque fois qu'un prenom est saisi
    console.log(i + prenom);// Afficher sur la console log
    if (prenom == null) {// mais si prenom est égale à null alors
        alert("Annuler");
        break;
    }
}
// Exercice 2
var nombre = prompt("Ecrire un nombre entier");
for (var i = nombre; i >= 0; i--) {
    console.log(i);
}
// Exercice 3 
var somme = 0;
var nombreEntiers=0;
var entier=1;
while (entier!==0){
    entier = parseInt(prompt("Saisir des nombres entiers (0 pour arreter la saisie):"));
    if(entier !==0){
        somme +=entier;
        nombreEntiers++;
    }
}
var moyenne=somme/nombreEntiers;
console.log("La somme des enters est:"+somme);
console.log("La moyenne est:"+moyenne);

//Exercice 4
i = prompt("Entrez votre nombre");
nombre = prompt("Entrez votre multiplicateur");
for (var compteur =i*nombre; compteur >= 0; compteur -= i){
    resultat = i * nombre;
    console.log(i+"x"+nombre+"="+compteur);
    nombre--;
}
//Exercice 5 
var mot = prompt("Entrez un mot :"); // demande à l'utilisateur de saisir un mot
var voyelles = "aeiouy"; // liste des voyelles
var compteur = 0; // initialisation du compteur de voyelles

for (var i = 0; i < mot.length; i++) { // boucle sur chaque lettre du mot
if (voyelles.indexOf(mot.substring(i, i+1)) !== -1) { // si la lettre est une voyelle
compteur++; // on incrémente le compteur
}
}

console.log("Le mot " + mot + " contient " + compteur + " voyelle(s)."); // affiche le résultat

