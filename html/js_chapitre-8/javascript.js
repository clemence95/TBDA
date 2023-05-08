var prenom = "prenom"; //type "chaine"
i = 0
while (prenom != "") // boucle while(condition vraie)
{// Si la condition (prenom strictement égale à "" Alors;)
    prenom = prompt("Entrez le prenom N°" + i);//Demande prenom n°1 à l'utilisateur
    i++; //(i=0)+(i=0) à chaque fois qu'un prenom est saisi
    console.log(i + prenom);// Afficher sur la console log
    if (prenom == null) {// mais si prenom est égale à null alors
        alert("Annuler");
        break;
    }
}
var nombre = prompt("Ecrire un nombre entier");
for (var i = nombre; i >= 0; i--) {
    console.log(i);
}
total = 0
compteur = 0
while (nombre != "") {
    nombre = int(input("Saisir un nombre entier 0 pour arreter la saisie"));
    if (nombre == 0) {
        total += nombre
        compteur += 1
        break
    }

    if (compteur > 0) {
moyenne = total / compteur
alert("La somme est :"+total);
alert("La moyenne est :"+moyenne);
    }
    else{
        alert("Aucun nombre saisi");
    }
}
