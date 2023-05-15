//Exercice 1 
let jeune = 0;
let adulte = 0;
let centenaire = 0;
let age = 0;
while (age<41){
    age = parseInt(prompt("Saisir un age"));
    if (age < 20) {
        jeune++;
    }
    else if (age >= 20 && age <= 40) {
        adulte++;
    }
}
centenaire++;
document.write("Nombre de personnes de moins de 20 ans : " + jeune + "<br>");
document.write("Nombre de personnes entre 20 et 40 ans : " + adulte + "<br>");
document.write("Nombre de personnes de plus de 40 ans : " + centenaire + "<br>");

//Exercice 2
let i = 0;
let nb = parseInt(prompt("Saisir un nombre"));
let resultat;
function TableMultiplication(x) {
    for (i = 0; i <= 10; i++) {
        resultat=(i*x);
        document.write(x+"*"+i+"="+resultat+"<br>");
    }
}
TableMultiplication(nb);




