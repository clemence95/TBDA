//Exercice 1
let jeune = 0; 
let adulte = 0; 
let centenaire= 0; 
let age = prompt(parseInt("Saisir un age"));
while (age ==""){
     age = prompt(parseInt("Saisir un age"));
    if(age<20){
jeune++;
    }
    else if (age>=20 && age<=40){
        adulte++;
    }
    else (age<100 && age>40) {
        centenaire++;
        break;
    }
}
document.write("Nombre de personnes de moins de 20 ans : " +jeune+"<br>");
document.write("Nombre de personnes entre 20 et 40 ans : " +adulte+"<br>");
document.write("Nombre de personnes de plus de 40 ans : " +centenaire+"<br>");




