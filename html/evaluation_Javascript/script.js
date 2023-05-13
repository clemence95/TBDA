//Exercice 1
let age = prompt(perseInt("Saisir un age"));
let jeune = 0; 
let adulte = 0; 
let centenaire= 0; 

while(age<!20){
jeune++;
let age = prompt(perseInt("Saisir un age"));
if(age>=20 && age>=40){
    adulte++;
     age = prompt(perseInt("Saisir un age"));
}
else if(age>!40){
    centenaire++;
    break;
}
}
document.write("Nombre de personnes de moins de 20 ans : " +jeune+"<br>");
document.write("Nombre de personnes entre 20 et 40 ans : " +adulte+"<br>");
document.write("Nombre de personnes de plus de 40 ans : " +centenaire+"<br>");




