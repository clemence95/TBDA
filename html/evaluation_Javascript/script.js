//Exercice 1
let jeune = 0;
let adulte = 0;
let centenaire = 0;
let age = 0;
while (age < 100) {
    age = parseInt(prompt("Saisir un age"));
    if (age < 20) {
        jeune++;
    }
    else if (age >= 20 && age <= 40) {
        adulte++;
    }
    else {
        centenaire++;
        break;
    }
}
document.write("Nombre de personnes de moins de 20 ans : " + jeune + "<br>");
document.write("Nombre de personnes entre 20 et 40 ans : " + adulte + "<br>");
document.write("Nombre de personnes de plus de 40 ans : " + centenaire + "<br>");

//Exercice 2
let i = 0;
let resultat = 0;
let nb = parseInt(prompt("Saisir un nombre"));
function TabledeMultiplication(nb) {
    for (i = 0; i <= 10; i++) {
        resultat = (nb * i);
        document.write(nb + "*" + i + "=" + resultat + "<br>");
    }
}
TabledeMultiplication(nb);

//Exercice 3
let tab = ["Audrey","Aurélien","Flavien","Jérémy","Laurent","Melik","Nouara","Salem","Samuel"];

let prenom = prompt("Saisir un prenom")
let index = tab.indexOf(prenom); //indexof vérifie si le prénom est dans le tableau
if(index !== -1){ 
//Supprime le prenom
tab.splice(index,1);
document.write("Vous avez trouvé un prénom");
prenom =prompt("Sai")
}
document.write("Le prénom n'a pas été trouvé dans le tableau");



